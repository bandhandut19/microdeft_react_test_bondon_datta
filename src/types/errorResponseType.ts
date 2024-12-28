interface IErrorResponseType {
  message: string;
  errors: {
    password: string[];
  };
}

export default IErrorResponseType;
