$(document).ready(function () {
	const postTitleField = $('#postTitleField');
	const postContentField = $('#postContentField');
	const addPostBtn = $("#addPostBtn");

	addPostBtn.on('click', async function (event) {
		event.preventDefault();
		await $.post('/api/posts', {
			title: postTitleField.val(),
			content: postContentField.val(),			
		});
		window.location.reload();
	});
});