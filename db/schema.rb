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

ActiveRecord::Schema[7.0].define(version: 2023_07_27_064204) do
  create_table "categories", force: :cascade do |t|
    t.string "category_name"
    t.integer "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_categories_on_content_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "body"
    t.integer "user_id", null: false
    t.integer "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_comments_on_content_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "content_categories", force: :cascade do |t|
    t.integer "content_id", null: false
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_content_categories_on_category_id"
    t.index ["content_id"], name: "index_content_categories_on_content_id"
  end

  create_table "content_likes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_content_likes_on_content_id"
    t.index ["user_id"], name: "index_content_likes_on_user_id"
  end

  create_table "content_tags", force: :cascade do |t|
    t.integer "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_content_tags_on_content_id"
  end

  create_table "content_templates", force: :cascade do |t|
    t.string "name"
    t.string "content"
    t.integer "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_content_templates_on_content_id"
  end

  create_table "content_views", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_content_views_on_content_id"
    t.index ["user_id"], name: "index_content_views_on_user_id"
  end

  create_table "contents", force: :cascade do |t|
    t.string "title"
    t.string "body"
    t.string "content_type"
    t.string "status"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_contents_on_user_id"
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "media_files", force: :cascade do |t|
    t.string "type"
    t.string "url"
    t.integer "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_media_files_on_content_id"
  end

  create_table "notifications", force: :cascade do |t|
    t.string "message"
    t.string "type"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "reports", force: :cascade do |t|
    t.string "body"
    t.integer "user_id", null: false
    t.integer "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_reports_on_content_id"
    t.index ["user_id"], name: "index_reports_on_user_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "name"
    t.string "photo"
    t.date "doB"
    t.string "role"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "categories", "contents"
  add_foreign_key "comments", "contents"
  add_foreign_key "comments", "users"
  add_foreign_key "content_categories", "categories"
  add_foreign_key "content_categories", "contents"
  add_foreign_key "content_likes", "contents"
  add_foreign_key "content_likes", "users"
  add_foreign_key "content_tags", "contents"
  add_foreign_key "content_templates", "contents"
  add_foreign_key "content_views", "contents"
  add_foreign_key "content_views", "users"
  add_foreign_key "contents", "users"
  add_foreign_key "media_files", "contents"
  add_foreign_key "notifications", "users"
  add_foreign_key "reports", "contents"
  add_foreign_key "reports", "users"
end