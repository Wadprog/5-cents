import { UserType } from '../src/Types/users.type';
import generateFakeEmail from './generateFakeEmail.mockData';

const allUsers = [];
export const getRandUser = (): UserType => {
  const rand = Math.floor(Math.random() * allUsers.length);
  const user = allUsers[rand];
  const userGender =
    user.gender === 'm' || user.gender === 'f'
      ? user.gender
      : genders[Math.floor(Math.random() * genders.length)];
  return {
    ...user,
    passwordConfirmation: user.password,
    email: generateFakeEmail(),
    gender: userGender,
  };
};

export const generateFakeUser = (num: number = 1): UserType[] => {
  const users: any[] = [];
  let i = 0;
  while (i < numberOfUser) {
    users.push(getRandUser());
    i += 1;
  }
  return users;
};
