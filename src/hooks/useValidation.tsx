// import { useEffect, useState } from 'react';

// import { SYNCAP_SERVICE } from '@/api/axiosConfig';

// export const useFormValidation = (formUrl: string) => {
//   // const [schema, setSchema] = useState<any>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isValid, setIsValid] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);

//     SYNCAP_SERVICE.post(formUrl, { firstName: 'John' })
//       .then(async ({ data }) => {
//         setIsValid(true);
//       })
//       .catch((error) => {
//         // const validationSchema: any = yup.object().shape(error);
//         // setSchema(validationSchema);
//         setSchema(null);
//         setIsLoading(false);
//       });
//   }, [formUrl]);

//   const validateForm = async (formData: any) => {
//     if (!schema) return;

//     try {
//       await schema.validate(formData);
//       setIsValid(true);
//     } catch (error) {
//       setIsValid(false);
//     }
//   };

//   return { isValid, validateForm, isLoading };
// };
