<template>
    <v-tooltip top :disabled="valid">
        <template v-slot:activator="{ on }">
            <div v-on="on" class="d-inline-block">
            <v-btn
                class="mx-2"
                dark
                :color="`ryu_${color}`"
                target="_blank"
                rel="noopener"
                :loading="loading"
                :href="href"
                :disabled="disabled"
                @click.once="click"
            >
                <v-icon class="mx-5">fab fa-{{ platform }}</v-icon>
            </v-btn>
            </div>
        </template>
        <span>{{ version }}</span>
    </v-tooltip>
</template>

<script>
export default {
    props: {
        platform: String,
        color: String,
        loading: Boolean,
        href: String,
        version: String,
        click: Function,
        disabled: Boolean
    }
}
</script>