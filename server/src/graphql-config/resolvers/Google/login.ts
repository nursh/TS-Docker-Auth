import { OptionsWithCode } from 'lib/types';
import { Google } from 'lib/api';

export const googleLogin = async (opts: OptionsWithCode) => {
  const user = await Google.login(opts.code);

  if (!user) {
    throw new Error('Google login error');
  }

  // INFO: Get username and userId information
  const userNamesList = user.names;
  const userName = userNamesList ? userNamesList[0].displayName : null;
  const userId =
    userNamesList &&
    userNamesList[0].metadata &&
    userNamesList[0].metadata.source
      ? userNamesList[0].metadata.source.id
      : null;

  // INFO: Get user email information
  const userEmailList = user.emailAddresses;
  const userEmail =
    userEmailList && userEmailList[0].value ? userEmailList[0].value : null;

  // INFO: Get user photo
  const userPhotoList = user.photos;
  const userAvatar =
    userPhotoList && userPhotoList[0].url ? userPhotoList[0].url : null;

  if (!userName || !userId || !userEmail || !userAvatar) {
    throw new Error('Some google value is missing');
  }

  return 'Google user found';
};
