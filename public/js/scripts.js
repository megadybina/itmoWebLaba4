function toggleMenu(){
		let menu = document.getElementById("menu");
		if (menu.style.display == "block"){
			menu.style.display = "none";
		} else {
			menu.style.display = "block";
		}
	}

function WriteUserList(userList){
		const flexblog = document.getElementById("flex-blog");
		for(var i = 0; i<userList.length; i++){
			flexblog.innerHTML += `
			<div class="flex-box">
					<article> 
						<a href="/account/${i}" style="color:black;">
							<img class="blog-miniava" src=${userList[i].ava} border="1px" margin="15px" align="left" alt="аватарка">
							<span style="font-size: 22px;"><b>${userList[i].name}</b></span>
						</a>
					</article>
				</div>`

		}
	}

function WriteUserPosts(posts){
		const flexblog = document.getElementById("flex-blog");
		for(var i = posts.length - 1; i>=0; i--){
			flexblog.innerHTML += `
			<div class="flex-box">
					<article> 
						<img class="blog-miniava" src=${posts[i].ava} border="1px" margin="15px" align="left" alt="аватарка">
						<span style="font-size: 22px;"><a href='/blog/post/${posts[i].postId}' style="color:black;"><b>${posts[i].postTitle}</b></a></span>
						<hr><br>
						<img class="blog-foto" src=${posts[i].postPhoto} border="2px" height="250px" margin="20px" align="left">
						<span>${posts[i].postText}</span>
					</article>
					<hr>
					<div class="flex-blog-comments">
						<div class="blog-comments-item">
							<img class="blog-icon" src="http://cdn.onlinewebfonts.com/svg/img_73674.png"><span style="vertical-align: middle; padding-top:4px; padding-left:0px;">53 нравки</span></div>
						<div class="blog-comments-item">
							<img class="blog-icon" src="http://simpleicon.com/wp-content/uploads/retweet.png"><span style="vertical-align: middle; padding-top:4px; padding-left:0px;">17 ремявок</span></div>
						<div class="blog-comments-item">
							<img class="blog-icon" src="https://www.nicepng.com/png/full/12-122557_loading-cat-comments-cat-icon-white-png.png"><span style="vertical-align: middle; padding-top:4px; padding-left:0px;">3 комментика</span></div>
					</div>
				</div>`

		}
	}

	function WriteNewPosts(posts){
		const flexblog = document.getElementById("flex-blog");
		for(var i = posts.length - 1; i>=posts.length-3; i--){
			flexblog.innerHTML += `
			<div class="flex-box">
					<article> 
						<a href='/account/${posts[i].userId}'> <img class="blog-miniava" src=${posts[i].ava} border="1px" margin="15px" align="left" alt="аватарка"></a>
						<span style="font-size: 22px; color:black;"><a href='/blog/post/${i}' style="color:black;"><b>${posts[i].postTitle}</b></a></span>
						<hr><br>
						<img class="blog-foto" src=${posts[i].postPhoto} border="2px" height="250px" margin="20px" align="left">
						<span>${posts[i].postText}</span>
					</article>
					<hr>
					<div class="flex-blog-comments">
						<div class="blog-comments-item">
							<img class="blog-icon" src="http://cdn.onlinewebfonts.com/svg/img_73674.png"><span style="vertical-align: middle; padding-top:4px; padding-left:0px;">53 нравки</span></div>
						<div class="blog-comments-item">
							<img class="blog-icon" src="http://simpleicon.com/wp-content/uploads/retweet.png"><span style="vertical-align: middle; padding-top:4px; padding-left:0px;">17 ремявок</span></div>
						<div class="blog-comments-item">
							<img class="blog-icon" src="https://www.nicepng.com/png/full/12-122557_loading-cat-comments-cat-icon-white-png.png"><span style="vertical-align: middle; padding-top:4px; padding-left:0px;">3 комментика</span></div>
					</div>
				</div>`

		}
	}	
function IsLoggedIn(currentLogin){
	const menu = document.getElementById("menu");
	
	if(currentLogin != -1){
		menu.innerHTML += `
		<li><a href="/account/${currentLogin}">Профиль</a></li>
		<li><a onclick="document.getElementById('logoutForm').submit();">Выход</a></li>`
		console.log(window.location.pathname);
		if(window.location.pathname==`/account/${currentLogin}`){
			const edit = document.getElementById("editButton");
			edit.innerHTML += `<a href="/account/edit"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/100px-Edit_icon_%28the_Noun_Project_30184%29.svg.png" alt="edit" style="width:20px"></a>`
		}
			}
	else{
		menu.innerHTML += `
		<li><a href="/account/login">Вход</a></li>`
	}
}

function toggleEditProfileButton(currentLogin){
	const edit = document.getElementById("editButton");
	if(currentLogin != -1 && window.location.pathname==`/account/${currentLogin}`){
		edit.innerHTML += `<a href="/account/edit"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/100px-Edit_icon_%28the_Noun_Project_30184%29.svg.png" alt="edit" style="width:24px"></a>`
	}
}

function toggleEditPostButton(currentLogin, postId, postAuthor){
	const edit = document.getElementById("editPostButton");
	if(currentLogin != -1 && postAuthor==currentLogin){
		
		edit.innerHTML += `
		<form action="/blog/post/${postId}/delete" method="POST" id="deletePost"></form>
		<a href="/blog/post/${postId}/edit"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/100px-Edit_icon_%28the_Noun_Project_30184%29.svg.png" alt="edit" style="width:24px"></a>
		<a onclick="document.getElementById('deletePost').submit();"><img src="https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-64-512.png" alt="delete" style="width:24px"></a>`
	}
}

function toggleNewPostButton(currentLogin){
	const newPost = document.getElementById("newPostButton");
	if(currentLogin != -1 && window.location.pathname==`/account/${currentLogin}`){
		newPost.innerHTML += `<a href="/blog/post/newpost"><img src="https://cdn2.iconfinder.com/data/icons/lucid-generic/24/new_artboard_file_create_post-512.png" alt="new" style="width:24px"></a>`
	}
}