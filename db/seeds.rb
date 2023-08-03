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
9.times do |i|
  User.create!(
    username: Faker::Internet.unique.user_name,
    email: Faker::Internet.unique.email,
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31'),
    editor: false,
    admin: false,
    profilePicture: "",
    coverPicture: ""
  )
end

# Create some posts
users = User.all
9.times do |i|
  post = users.sample.posts.create!(
    title: Faker::Lorem.sentence,
    desc: Faker::Lorem.paragraph,
    img: Faker::LoremFlickr.image(size: "300x200", search_terms: ['nature', 'city', 'food']),
    likes: [],
    liked_by: [],
    likes_count: 0,
    post: "Some post content" # Replace "Some post content" with the actual content of the post
  )
end

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