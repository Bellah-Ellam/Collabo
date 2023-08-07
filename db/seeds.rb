require 'faker'
puts "Seeding..."

# Create the admin user
User.create!(
  username: "reagan",
  email: "reagan@gmail.com",
  password: "reagan12_password",
  admin: true,
  date_of_birth: "2000-10-11",
   profilePicture: "", 
  coverPicture: "" 
  )

# Create regular users
user1 = User.create!(
    username: "andy",
    email: "andy@gmail.com",
    password: "password",
    date_of_birth: "4/2/1998",
    editor: false, 
    admin: false,
    profilePicture: "https://plus.unsplash.com/premium_photo-1682965699742-92e41c2d8630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coverPicture: "https://media.istockphoto.com/id/1426460860/photo/smiling-young-african-woman-sitting-with-laptop-in-cafe.webp?b=1&s=170667a&w=0&k=20&c=1Fj4bBhlOxBKN9zvuT8Ysli5MyBasNQW2KnYApO-r4c="
  )
  user2 = User.create!(
    username: Faker::Internet.unique.user_name,
    email: Faker::Internet.unique.email,
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false, 
    admin: false,
    profilePicture: "",
    coverPicture: ""
  )
  user3 = User.create!(
    username: Faker::Internet.unique.user_name,
    email: Faker::Internet.unique.email,
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false, 
    admin: false,
    profilePicture: "",
    coverPicture: ""
  )
  user4 = User.create!(
    username: Faker::Internet.unique.user_name,
    email: Faker::Internet.unique.email,
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false, 
    admin: false,
    profilePicture: "",
    coverPicture: ""
  )
  user5 = User.create!(
    username: Faker::Internet.unique.user_name,
    email: Faker::Internet.unique.email,
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false, 
    admin: false,
    profilePicture: "",
    coverPicture: ""
  )

# Create some posts
  post1 = Post.create!(
    desc: "Great weekend my wonderful people",
    img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    likes: [],
    liked_by: [],
    likes_count: 0
  )
  post2 = user2.posts.create!(
    desc: "My travel diaries",
    img: "https://plus.unsplash.com/premium_photo-1668061706855-26d4cf0f6248?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",    likes: [],
    liked_by: [],
    likes_count: 0
  )
  post3 = user3.posts.create!(
    desc: "Outdoor office day!",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",    likes: [],
    liked_by: [],
    likes_count: 0
  )
  post4 = user4.posts.create!(
    desc: "Debugging on the roof top",
    img: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",    likes: [],
    liked_by: [],
    likes_count: 5
  )
  post5 = user5.posts.create!(
    desc: "There is something about sunsets...sublime!",
    img: "https://images.unsplash.com/photo-1690788237344-857bd9618572?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",    likes: [],
    liked_by: [],
    likes_count: 0
  )


# Create some contents
users = User.all
9.times do |i|
  content = users.sample.contents.create!(
    title: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraph,
    content_type: "article",
    status: "published"
  )
end

# Create some categories
9.times do |i|
  Category.create!(
    category_name: Faker::Lorem.word,
    content_id: Content.all.sample.id
  )
end

# Create some tags
9.times do |i|
  Tag.create!(
    name: Faker::Lorem.word
  )
end

# Create content categories and tags
contents = Content.all
categories = Category.all
tags = Tag.all

contents.each do |content|
  content_categories = categories.sample(rand(1..3))
  content_tags = tags.sample(rand(1..3))

  content_categories.each do |category|
    ContentCategory.create!(content_id: content.id, category_id: category.id)
  end

 
end
#comment
contents = Content.all
users = User.all

10.times do
  content = contents.sample
  user = users.sample

  comment = content.comments.build(
    body: Faker::Lorem.paragraph,
    user: user
  )

  comment.save!
end



# Create some notifications
users.each do |user|
  5.times do |i|
    Notification.create!(
      message: Faker::Lorem.sentence,
      user_id: user.id
    )
  end
end
# Create likes and views for each content
contents = Content.all
users = User.all

contents.each do |content|
  # Create likes
  5.times do
    user = users.sample
    content_like = content.content_likes.build(user: user)
    content_like.save!
  end

  # Create views
  3.times do
    user = users.sample
    content_view = content.content_views.build(user: user)
    content_view.save!
  end
end


puts "Seeding completed!"
