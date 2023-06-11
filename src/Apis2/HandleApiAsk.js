import axiosInstance from "./axiosInstanceNoToken";

const askQuestion = async (question, context) => {
  return await axiosInstance.post(`/ask/sample`,{
    question: question,
    context: context
  });
};

export { askQuestion };
