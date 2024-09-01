'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IUser } from '@/app/@types/User';
import { addUser } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css';

const AddUserPage = () => {
  const [formData, setFormData] = useState<IUser>({
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    isAdmin: '',
    isActive: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: IUser) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Assuming addUser is a function that sends data to your server or API
      await addUser(formData);
      alert('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          placeholder="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <select name="isAdmin" value={formData.isAdmin} onChange={handleChange}>
          <option value="">Is Admin?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="isActive" value={formData.isActive} onChange={handleChange}>
          <option value="">Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
