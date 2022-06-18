from string import Template
import argparse
import json
import os
import shutil

# Script arguments
parser = argparse.ArgumentParser(description="testdesc")
parser.add_argument("--var-file", required=True, type=str, help="Path to the .tfvars.json file for the environment you want to deploy.")
args = parser.parse_args()

var_file = args.var_file

# Check provided file exists
if not os.path.isfile(var_file): 
  raise Exception(f'File `{var_file}` does not exist.')

# Clean up any terraform stuff from previous runs
if os.path.isdir(".terraform"):
  shutil.rmtree(".terraform")

if os.path.isfile(".terraform.lock.hcl"): 
  os.remove(".terraform.lock.hcl")

if os.path.isfile("provider.tf"): 
  os.remove("provider.tf")

# Read vars file
with open(var_file, "r") as f:
    tfvars = json.load(f)

params = {
    "bucket_name": tfvars["state_bucket"],
    "state_key"  : f'{tfvars["env"]}.tfstate',
    "region"     : tfvars["region"],
    "aws_profile": tfvars["aws_profile"]
}

# Write provder.tf from provider.tf.tmpl, using vars from vars file.
with open('provider.tf.tmpl', 'r') as tmplFile:
    src = Template(tmplFile.read())
    result = src.substitute(params)

with open('provider.tf', 'w') as providerFile:
    providerFile.write(result)
