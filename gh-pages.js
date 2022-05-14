import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/alecb7/runningforjarj.git', // Update to point to your repository
		user: {
			name: 'Alec Buchanan', // update to use your name
			email: 'alec-buchanan@hotmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);