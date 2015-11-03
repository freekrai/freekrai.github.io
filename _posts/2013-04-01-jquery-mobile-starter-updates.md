---
layout: "post"
title: "jQuery Mobile Starter updated"
link: "https://github.com/freekrai/jquery-mobile-starter"
tags: 
- "code"
date: "2013-04-01 16:57:00"
ogtype: "article"
bodyclass: "post"
---

Last night, jQuery Mobile Starter was updated to jQuery Mobile version 1.3 and I also added a handy new library called `store.js`,

This library is useful as a datastore system that lets you store data locally using localStorage.

Here’s an example of using it as a todo list system:

```javascript
<!DOCTYPE html>
<html>
	<body>
		<h1>Todo List</h1>
		<form id="todo_form" method="post" accept-charset="utf-8">
			<p><input type="text" name="todo_field" value="" id="todo_field" /><input type="submit" value="Create Todo" /></p>
		</form>
		<p>You have <span id="todo_count">?</span> todos remaining.</p>
		<div id="todo_list_wrapper"></div>

		<script src="js/lib/store.js"></script>
		<script type="text/javascript" charset="utf-8">
			var todo_table = new Store('todos');
			document.addEventListener('Storecommit', get_all, false);
			var count = document.getElementById('todo_count');
			var form = document.getElementById('todo_form');
			var wrapper = document.getElementById('todo_list_wrapper');
			var field = document.getElementById('todo_field');
	
			form.addEventListener('submit', function(e){
				e.preventDefault();
				if(field.value!=''); {
					todo_table.insert({
						'description':field.value,
						'status':1
					});
				}
				field.value = '';
			}, false);
			wrapper.addEventListener('click', handle_click, false);
			init();

			function handle_click(e) {
				e.preventDefault();
				if(e.target.hash=="#delete") {
					todo_table.delete('id', e.target.id);
				}
				if(e.target.hash=="#done") {
					todo_table.update('id', e.target.id, {'status':0});
				}
				if(e.target.hash=="#undo") {
					todo_table.update('id', e.target.id, {'status':1});
				}
			}

			function init() {
				get_all();
			}

			function get_all(e) {
				var todos = todo_table.selectAll();
				count.innerHTML = todos.length;
				var html = '';
				if (todos.length == 0) {
					html = '<p>Hooray!</p>';
				} else {
					html+= '<ul>';
					for (var i=0; i < todos.length; i++) {
						if( todos[i].status == 1 ){
							html+= '<li><a href="#delete" id="' + todos[i].id+'">[delete]</a> <a href="#done" id="' + todos[i].id+'">[done]</a> <span>'+todos[i].description+'</span></li>';
						}else{
							html+= '<li><a href="#delete" id="' + todos[i].id+'">[delete]</a> <a href="#undo" id="' + todos[i].id+'">[not done]</a> <span style="text-decoration: line-through;">'+todos[i].description+'</span></li>';
						}
					}
				}
				wrapper.innerHTML = html;
			}
		</script>
	</body>
</html>
```

In the example, I’m showing it’s use for a todo list, but you can also use it for storing just about any type of persistent data.

For example, if you have an app that has users logging in, you could store the user’s information locally, or use it for a daily cache of data from a web service in the case of doing look ups.

`store.js` has served me well over the past year, so including it in this library seemed the right thing to do, as it’s exactly what you want in this case.