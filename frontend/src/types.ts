export type SignUpUserInfo = {
  email: string;
  password: string;
  options: {
    first_name: string;
    last_name: string;
  };
};

export type Client = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  created_at: string;
  user_id: string;
};

export type CreateClientInfo = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  user_id: string;
};

export type Interaction = {
  id: string;
  client_id: string;
  type: string;
  content: string;
  created_at: string;
  due_date: string;
  is_complete: boolean;
};

export type CreateInteractionInfo = {
  client_id: string;
  type: string;
  content: string;
  due_date: string;
  is_complete: boolean;
};
