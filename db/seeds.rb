# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding"
User.create!(name: "Admin", email: "admin@mail.com", password: "password", password_confirmation: "password", role: 'admin', photo: "https://avatars.githubusercontent.com/u/76783698?v=4", date_of_birth: "2000-10-11")
User.create(name: '0maddox', email: 'nickkiim7@gmail.com', password: '123456', password_confirmation: '123456', photo: 'url_david',
            date_of_birth: '1991-04-03')


# # Create some users
# user1 = User.create(username: 'Mark', email: 'mark@example.com', password: 'password1', is_editor: true, is_admin: false)
# user2 = User.create(username: 'Jane', email: 'jane@example.com', password: 'password2', is_editor: false, is_admin: false)
# admin_user = User.create(username: 'admin', email: 'admin@example.com', password: 'admin_password', is_editor: true, is_admin: true)
# # Create some contents
# content1 = user1.contents.create(title: 'First Post', body: 'This is the first test post content.', content_type: 'article', status: 'published', published_at: Time.now)
# content2 = user2.contents.create(title: 'Second Post', body: 'This is the second post content.', content_type: 'news', status: 'draft', published_at: nil)
# # Create some comments
# comment1 = Comment.create(body: 'Great post!', content: content1, user: user2)
# comment2 = Comment.create(body: 'Looking forward to more!', content: content1, user: user1)
# # Create some categories
# category1 = Category.create(name: 'Technology', content: content1)
# category2 = Category.create(name: 'Politics', content: content2)
# # Create some content likes
# content_like1 = ContentLike.create(content: content1, user: user1)
# content_like2 = ContentLike.create(content: content1, user: user2)
# # Create some content views
# content_view1 = ContentView.create(content: content1, user: user1)
# content_view2 = ContentView.create(content: content2, user: user1)
# # Create some tags
# tag1 = Tag.create(name: 'Technology')
# tag2 = Tag.create(name: 'Science')
# tag3 = Tag.create(name: 'Politics')
# # Create some media files
# media_file1 = MediaFile.create(url: 'https://example.com/image1.jpg', type: 'image', uploaded_at: Time.now, content: content1)
# media_file2 = MediaFile.create(url: 'https://example.com/video1.mp4', type: 'video', uploaded_at: Time.now, content: content2)
# # Create some categories
# category1 = Category.create(name: 'Technology')
# category2 = Category.create(name: 'Science')
# # Create content categories and tags
# content1.content_categories.create(category: category1)
# content1.content_tags.create(tag: tag1)
# content1.content_tags.create(tag: tag2)
# content2.content_categories.create(category: category2)
# content2.content_tags.create(tag: tag2)
# content2.content_tags.create(tag: tag3)
 puts"done seeding"