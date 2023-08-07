require 'faker'
puts "Seeding..."

# Create the admin user
User.create!(
  username: "reagan",
  email: "reagan@gmail.com",
  password: "reagan12_password",
  admin: true,
  date_of_birth: "2000-10-11",
  profile_picture: "",
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
    username: "mose",
    email: "mose@gmai.com",
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: true, 
    admin: false,
    profilePicture: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coverPicture: "https://images.unsplash.com/photo-1615412704911-55d589229864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  )
  user3 = User.create!(
    username: Faker::Internet.unique.user_name,
    email: "faker@gmail.com",
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false, 
    admin: false,
    profilePicture: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coverPicture: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  )
  user4 = User.create!(
    username: "dante",
    email: "dante@gmail.com",
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false, 
    admin: false,
    profilePicture: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coverPicture: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  )
  user5 = User.create!(
    username: "sasha",
    email: "sasha@gmail.com",
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false, 
    admin: false,
    profilePicture: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coverPicture: "https://images.unsplash.com/photo-1644325781920-a41ee5b914b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  )

# Create some posts
  post1 = user1.posts.create!(
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

# Create some tags
tags_names = ['technology', 'food', 'travel', 'nature', 'fashion', 'sports', 'music', 'art', 'movies']

tags_names.each do |tag_name|
  Tag.create!(name: tag_name)
end

# Fetch all posts from the database
posts = Post.all

# Create comments
users = User.all
comments_count = 0

posts.each do |post|
  5.times do
    user = users.sample
    comment = Comment.create!(
      body: Faker::Lorem.paragraph,
      liked_by: [],
      likes_count: 0,
      user_id: user.id,
      post_id: post.id
    )
    comments_count += 1
  end
end

# Update comments_count in posts
posts.each do |post|
  post.update(comments_count: comments_count)
end

# Create some notifications
users.each do |user|
  5.times do |i|
    Notification.create!(
      content: Faker::Lorem.sentence,
      user_id: user.id,
      post_id: nil, # Set this to the post_id if the notification is related to a specific post
      read: [true, false].sample # Set read status randomly (for illustration purposes)
    )
  end
end

# Create likes for posts
posts.each do |post|
  # Create likes
  5.times do
    user = users.sample
    post.likes << user.id
  end

  # Create views
  3.times do
    user = users.sample
    post.liked_by << user.id
  end
end

puts "done seeding"