// CONTROLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL




// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as yup from 'yup';

// const FormExample = () => {
//   const handleSubmit = (values) => {
//     console.log('Form submitted with values:', values);
//   };

//   const validationSchema = yup.object().shape({
//     email: yup.string().email('Invalid email').required('Email is required'),
//     password: yup.string().required('Password is required'),
//   });

//   return (
//     <View style={styles.container}>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}
//       >
//         {({ handleChange, handleSubmit, values, errors, touched }) => (
//           <View>
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               onChangeText={handleChange('email')}
//               value={values.email}
//             />
//             {touched.email && errors.email && (
//               <Text style={styles.errorText}>{errors.email}</Text>
//             )}

//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               onChangeText={handleChange('password')}
//               value={values.password}
//               secureTextEntry
//             />
//             {touched.password && errors.password && (
//               <Text style={styles.errorText}>{errors.password}</Text>
//             )}

//             <Button title="Submit" onPress={handleSubmit} />
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 8,
//   },
//   errorText: {
//     color: 'red',
//   },
// });

// export default FormExample;