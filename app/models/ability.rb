class Ability < ApplicationRecord
    include CanCan::Ability
  
    def initialize(user)
      return unless user.present?
  
      if user.admin?
        can :manage, :all
      else
        can :read, Content
        can :manage, Comment, user_id: user.id # only allow user to manage their own comments
      end
    end
  
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, published: true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/blob/develop/docs/define_check_abilities.md
end
