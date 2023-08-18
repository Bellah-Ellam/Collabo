# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_03_134943) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "body"
    t.integer "liked_by", default: [], array: true
    t.integer "likes_count", default: 0
    t.integer "commented_by", default: [], array: true
    t.integer "comments_count", default: 0
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "followers_followings", force: :cascade do |t|
    t.bigint "follower_id"
    t.bigint "following_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["follower_id", "following_id"], name: "index_followers_followings_on_follower_id_and_following_id", unique: true
    t.index ["follower_id"], name: "index_followers_followings_on_follower_id"
    t.index ["following_id"], name: "index_followers_followings_on_following_id"
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", default: "", null: false
    t.string "token"
    t.datetime "exp", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
    t.index ["token"], name: "index_jwt_denylist_on_token", unique: true
  end

  create_table "notifications", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "post_id"
    t.text "content"
    t.boolean "read", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_notifications_on_post_id"
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.text "desc"
    t.string "img"
    t.string "title"
    t.string "post"
    t.integer "liked_by", default: [], array: true
    t.integer "likes_count", default: 0
    t.integer "commented_by", default: [], array: true
    t.integer "comments_count", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "likes", default: [], array: true
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "posts_tags", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_posts_tags_on_post_id", unique: true
    t.index ["tag_id"], name: "index_posts_tags_on_tag_id", unique: true
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", limit: 20, null: false
    t.string "email", limit: 50, null: false
    t.string "password_digest", null: false
    t.string "profilePicture", default: ""
    t.string "coverPicture", default: ""
    t.date "date_of_birth"
    t.integer "relationship"
    t.string "bio", limit: 50
    t.string "desc", limit: 50
    t.string "city", limit: 50
    t.string "from", limit: 50
    t.integer "notifications_count", default: 0
    t.integer "followed_by", default: [], array: true
    t.integer "followers_count", default: 0
    t.integer "unfollowed_by", default: [], array: true
    t.integer "following_count", default: 0
    t.integer "followers", default: [], array: true
    t.integer "followings", default: [], array: true
    t.boolean "editor"
    t.boolean "admin", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "followers_followings", "users", column: "follower_id"
  add_foreign_key "followers_followings", "users", column: "following_id"
  add_foreign_key "notifications", "posts"
  add_foreign_key "notifications", "users"
  add_foreign_key "posts", "users"
end
