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
    desc: Faker::Lorem.paragraph,
    img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    likes: [],
    liked_by: [],
    likes_count: 0
  )
end


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
