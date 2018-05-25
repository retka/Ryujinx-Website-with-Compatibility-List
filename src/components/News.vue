<template>
	<div>
		<section>
			<v-layout
				column
				wrap
				class="my-5"
				align-center
				justify-center
			>
				<v-container grid-list-xl fluid>
					<v-layout
						v-if="loading"
						row
						wrap
						align-center
						justify-center
					>
						<v-flex
							xs12
							class="text-xs-center"
						>
							<v-progress-circular :size="100" indeterminate color="primary"></v-progress-circular>
						</v-flex>
					</v-layout>
					<v-layout row wrap align-start>
						<v-flex
							v-for="article in articles"
							xs12 md6 lg4
							:key="article.title"
						>
							<v-card hover @click.native.stop="openArticle(article)">
								<v-card-media :src="article.image" height="300px"></v-card-media>
								<v-card-title primary-title>
									<div>
										<h3 class="headline mb-0">{{ article.title }}</h3>
										<span class="grey--text">{{ article.created }} by {{ article.author }}</span>
										<vue-markdown class="mt-3" v-if="article.short">{{ article.short }}</vue-markdown>
									</div>
								</v-card-title>
								<v-card-actions v-if="article.text">
									<v-spacer></v-spacer>
									<v-btn color="green darken-1" flat="flat" @click.native.stop="openArticle(article)">Learn More</v-btn>
								</v-card-actions>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
		</section>

		<v-dialog v-model="dialog" max-width="1000" scrollable lazy>
			<v-card>
				<v-card-title primary-title>
					<div>
						<h3 class="headline mb-0">{{ currentArticle.title }}</h3>
						<span class="grey--text">{{ currentArticle.created }} by {{ currentArticle.author }}</span>
					</div>
				</v-card-title>
				<v-card-media v-if="currentArticle" :src="currentArticle.image" height="300px"></v-card-media>
				<v-card-text>
					<vue-markdown :source="currentArticle.text"></vue-markdown>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
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
			currentArticle: false,
			dialog: false,
			loading: true,
			articles: []
		};
	},

	methods: {
		async fetchArticles () {
			let _a = await fetch('https://ryujinx.org/public/articles.json');
			this.articles = await _a.json();

			this.loading = false;
		},

		openArticle (article) {
			if (!article.text) return;

			this.dialog = true;
			this.currentArticle = article;
		}
	},

	mounted () {
		this.fetchArticles();
	}
};
</script>
