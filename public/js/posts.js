$(document).ready(function () {
	const postTitleField = $('#postTitleField');
	const postContentField = $('#postContentField');
	const addPostBtn = $("#addPostBtn");
	const viewPostBtn = $(".viewPost");

	addPostBtn.on('click', async function (event) {
		event.preventDefault();
		await $.post('/api/posts', {
			title: postTitleField.val(),
			content: postContentField.val(),			
		});
		window.location.reload();
	});

	viewPostBtn.on('click', async function (event) {
		event.preventDefault();
		const postId = $(this).attr('data-id');
		$.getJSON('/api/patients/' + postId, async function (data) {
			console.log(data);
			
		})
	});
});