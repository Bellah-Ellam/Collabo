include CanCan::Ability

  def initialize(user)
    user ||= User.new # Guest user

    if user.admin?
      can :manage, :all
    elsif user.moderator?
      can :read, Content
      can :manage, Comment
    else
      can :read, Content
      can :create, Comment
      can :update, Comment, user_id: user.id
      can :destroy, Comment, user_id: user.id
    end
  end
end