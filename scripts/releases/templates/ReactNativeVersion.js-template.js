/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 * @oncall react_native
 */

/*::
import type {Version} from '../utils/version-utils';
*/

module.exports = ({version} /*: {version: Version} */) /*: string */ => `/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * ${'@'}generated by scripts/releases/set-rn-version.js
 */

const version: $ReadOnly<{
  major: number,
  minor: number,
  patch: number,
  prerelease: string | null,
}> = {
  major: ${version.major},
  minor: ${version.minor},
  patch: ${version.patch},
  prerelease: ${
    version.prerelease != null ? `'${version.prerelease}'` : 'null'
  },
};

module.exports = {version};
`;
