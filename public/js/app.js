$(document).ready(function () {
	const usernameField = $('#usernameField');
	const passwordField = $('#passwordField');
	const signinBtn = $('#signinBtn');
	const viewPostBtn = $('.viewPostBtn');

	signinBtn.on('click', async function (event) {
		event.preventDefault();
		await $.post('/api/users/login', {
			username: usernameField.val().trim(),
			password: passwordField.val().trim(),
		});
		window.location.href = '/posts';
	});

	viewPostBtn.on('click', function (event) {
		event.preventDefault();
		const postId = $(this).attr('data-id');
		console.log(postId);
		$.get('/api/posts/' + postId, async function (data) {
					
		});
		window.location.href = '/singlePost'
	})

});