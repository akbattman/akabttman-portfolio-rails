class Message < MailForm::Base
  attribute :name,      validate: true
  attribute :email,     validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,   validate: true
  attribute :nickname,  captcha: true


  # Declare the e-mail headers. It accepts anything the mail method in ActionMailer accepts.
  def headers
    {
      :subject => "Contact Form Inquiry",
      :to => "aaron.k.battman@outlook.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
