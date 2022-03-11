$(document).ready(function () {
	const usernameField = $('#usernameField');
	const passwordField = $('#passwordField');
	const emailField = $('#emailField');
	const signupBtn = $('#signupBtn');
	const signinBtn = $('#signinBtn');
	const viewPostBtn = $('.viewPostBtn');
	const postTitleField = $('#postTitleField');
	const postContentField = $('#postContentField');
	const addPostBtn = $("#addPostBtn");
	const postCommentField = $('#postCommentField');
	const addCommentBtn = $("#addCommentBtn");
	
	signupBtn.on('click', async function (event) {
		event.preventDefault();
		await $.post('/api/users/signup', {
			email: emailField.val(),
			username: usernameField.val(),
			password: passwordField.val(),
		});
		window.location.href = '/dashboard';
	});

	signinBtn.on('click', async function (event) {
		event.preventDefault();
		await $.post('/api/users/login', {
			username: usernameField.val().trim(),
			password: passwordField.val().trim(),
		});
		window.location.href = '/dashboard';
	});
	
	viewPostBtn.on('click', function (event) {
		event.preventDefault();
		const postId = $(this).attr('data-id');
		window.location.href = `/api/posts/${postId}`;
	})
	
	addPostBtn.on('click', async function (event) {
		event.preventDefault();
		await $.post('/api/posts', {
			title: postTitleField.val(),
			content: postContentField.val(),			
		});
		window.location.reload();
	});

	addCommentBtn.on('click', async function (event) {
		event.preventDefault();
		await $.post('/api/comments', {
			text: postCommentField.val(),
			blog_id: event.target.getAttribute('data-postId'),			
		});
		window.location.reload();
	});
});