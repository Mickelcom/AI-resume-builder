import api from "@/lib/axios";

export const analyzeResume = async (
  file: File,
  jobDescription: string
) => {

  const formData = new FormData();

  formData.append("resume", file);

  formData.append(
    "jobDescription",
    jobDescription
  );

  const response = await api.post(
    "/ai/analyze-resume",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
};