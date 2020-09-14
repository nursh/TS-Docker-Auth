import { Role } from 'lib/types';

/** PERMISSIONS */
export const Permissions = {
  READ_ANY_ACCOUNT: 'read:any_account',
  READ_SOME_ACCOUNTS: 'read:some_accounts',
  READ_OWN_ACCOUNT: 'read:own_account'
};

export const assignPermissions = (role: Role) => {
  switch (role) {
    case 'ADMIN':
      return [Permissions.READ_ANY_ACCOUNT];

    case 'MANAGER':
      return [Permissions.READ_SOME_ACCOUNTS];

    case 'BASIC':
      return [Permissions.READ_OWN_ACCOUNT];
  }
};
