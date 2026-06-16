/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
}

export interface SwitchBoardState {
  plateColor: string;
  switchColor: string;
  wallTexture: string;
  ledIndicatorActive: boolean;
}
