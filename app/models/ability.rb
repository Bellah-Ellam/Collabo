# app/models/ability.rb
class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # Guest user

    if user.admin?
      can :manage, :all
    elsif user.moderator?
      can :read, Post
      can :manage, Comment
    else
      can :read, Post
      can :create, [Post, Comment]
      can :update, [Post, Comment], user_id: user.id
      can :destroy, [Post, Comment], user_id: user.id
      can :create, Comment, post: { user_id: user.id }
      can :create, Comment, parent_comment: { user_id: user.id }
      can :update, User, id: user.id
      can :read, User
    end
  end
end
