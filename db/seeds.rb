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

  User.create!(
    username: "wese",
    email: "wese@gmail.com",
    password: "12345",
    date_of_birth: '1980-01-01',
    editor: false, 
    admin: false,
    profilePicture: "https://images.pexels.com/photos/15100117/pexels-photo-15100117/free-photo-of-a-person-holding-a-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    coverPicture: "https://images.pexels.com/photos/6660041/pexels-photo-6660041.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  )


# Create some posts
users = User.all
9.times do |i|
  post = users.sample.posts.create!(
    desc: Faker::Lorem.paragraph,
    img: "https://images.pexels.com/photos/2086655/pexels-photo-2086655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
