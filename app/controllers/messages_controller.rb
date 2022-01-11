class MessagesController < ApplicationController

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
    @message.request = request
    if @message.deliver
      flash.now[:success] = 'Message sent!'
    else
      flash.now[:error] = 'Could not send message'
      render :new
    end
  end

end
