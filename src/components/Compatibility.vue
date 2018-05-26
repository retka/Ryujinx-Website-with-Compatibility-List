<template>
	<div>
		<section>
			 <v-card>
				<v-card-title>
					<v-card-title class="display-1">
						Game Compatibility List
					</v-card-title>
					<v-spacer></v-spacer>
					<v-text-field
						v-model="search"
						append-icon="search"
						label="Search"
						single-line
						hide-details
					></v-text-field>
				</v-card-title>
				<v-data-table
					:headers="headers"
					:items="games"
					:loading="loading"
					:search="search"
					item-key="name"
					must-sort
					class="elevation-1"
				>
					<v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
					<template slot="items" slot-scope="props">
						<tr @click="props.expanded = !props.expanded">
							<td>
								<img :src="props.item.boxart_url" height="100px">
							</td>
							<td>{{ props.item.name }}</td>
							<td>{{ props.item.title_id.join(', ') }}</td>
							<td>{{ props.item.state_emu_version }}</td>
							<td>{{ props.item.nickname }}</td>
							<td>{{ props.item.state }}</td>
							<td>
								<vue-markdown :source="props.item.comment"></vue-markdown>
								<div v-if="props.item.screen_url"><em>Click for more information</em></div>
							</td>
							<td>{{ props.item.state_last_date }}</td>
						</tr>
					</template>
					<template slot="expand" slot-scope="props">
						<v-layout row wrap align-start justify-center>
							<v-flex xs12 md6>
								<img
									v-if="props.item.screen_url"
									:src="props.item.screen_url"
									class="px-5 py-5"
									width="100%"
								>
							</v-flex>
						</v-layout>
					</template>
					<template slot="no-data">
						<div v-if="loading" class="text-xs-center">
							Loading games, hang tight fam...
						</div>
					</template>
				</v-data-table>
			</v-card>
		</section>
	</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
	components: {
		VueMarkdown
	},

	data () {
		return {
			loading: true,
			games: [],
			search: '',
			headers: [
				{
					text: 'Boxart',
					value: 'boxart_url',
					sortable: false
				},
				{
					text: 'Name',
					value: 'name'
				},
				{
					text: 'Title IDs',
					value: 'title_id'
				},
				{
					text: 'Commit',
					value: 'state_emu_version'
				},
				{
					text: 'Tester',
					value: 'nickname'
				},
				{
					text: 'State',
					value: 'state'
				},
				{
					text: 'Comment',
					value: 'comment'
				},
				{
					text: 'Last Test Date',
					value: 'state_last_date'
				}
			]
		};
	},

	methods: {
		async fetchGames () {
			let _fetch = await fetch('https://ryujinx.org/public/CompatibilityList.json');
			this.games = await _fetch.json();
			this.loading = false;
		}
	},

	mounted () {
		this.fetchGames();
	}
};
</script>
