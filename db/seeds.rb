require 'faker'
puts "Seeding..."

# Create the admin user
User.create!(
  username: "reagan",
  email: "reagan@gmail.com",
  password: "reagan12_password",
  admin: true,
  date_of_birth: "2000-10-11",
  profilePicture: "https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&w=1000&q=80",
  coverPicture: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
)

# Create regular users

  User.create!(
    username: Faker::Internet.unique.user_name,
    email: Faker::Internet.unique.email,
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: true, 
    admin: false,
    profilePicture: "https://images.pexels.com/photos/15100117/pexels-photo-15100117/free-photo-of-a-person-holding-a-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    coverPicture: "https://images.pexels.com/photos/6660041/pexels-photo-6660041.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
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
    profilePicture: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800",
    coverPicture: ""
  )
  user3 = User.create!(
    username: Faker::Internet.unique.user_name,
    email: Faker::Internet.unique.email,
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false,
    admin: false,
    profilePicture: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
    coverPicture: ""
  )
  user4 = User.create!(
    username: Faker::Internet.unique.user_name,
    email: Faker::Internet.unique.email,
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false,
    admin: false,
    profilePicture: "https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg?auto=compress&cs=tinysrgb&w=800",
    coverPicture: ""
  )
  user5 = User.create!(
    username: Faker::Internet.unique.user_name,
    email: Faker::Internet.unique.email,
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false,
    admin: false,
    profilePicture: "https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=800",
    coverPicture: ""
  )
# Create some posts
  post1 = user1.posts.create!(
    desc: "Great weekend my wonderful people",
    img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    likes: [user1.id,user2.id, user3.id, user4.id],
    liked_by: [],
    likes_count: 4
  )
  post2 = user2.posts.create!(
    desc: "My travel diaries",
    img: "https://plus.unsplash.com/premium_photo-1668061706855-26d4cf0f6248?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",   likes: [user1.id,user2.id, user3.id, user4.id],
    liked_by: [],
    likes_count: 4
  )
  post3 = user3.posts.create!(
    desc: "Outdoor office day!",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",   likes: [user1.id,user2.id, user3.id, user4.id],
    liked_by: [],
    likes_count: 4
  )
  post4 = user4.posts.create!(
    desc: "Debugging on the roof top",
    img: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",   likes: [user2.id, user3.id, user4.id],
    liked_by: [],
    likes_count: 3
  )
  post5 = user5.posts.create!(
    desc: "There is something about sunsets...sublime!",
    img: "https://images.unsplash.com/photo-1690788237344-857bd9618572?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",    likes: [user1.id,user2.id, user3.id, user4.id],
    liked_by: [],
    likes_count: 4
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
  2.times do
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