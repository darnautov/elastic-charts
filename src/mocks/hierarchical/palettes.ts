/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { RgbTuple } from '../../chart_types/partition_chart/layout/utils/color_library_wrappers';

const CET2s: RgbTuple[] = [
  [46, 34, 235],
  [49, 32, 237],
  [52, 30, 238],
  [56, 29, 239],
  [59, 28, 240],
  [63, 27, 241],
  [66, 27, 242],
  [70, 27, 242],
  [73, 27, 243],
  [77, 28, 244],
  [80, 29, 244],
  [84, 30, 245],
  [87, 31, 245],
  [91, 32, 246],
  [94, 33, 246],
  [97, 35, 246],
  [100, 36, 247],
  [103, 38, 247],
  [106, 39, 248],
  [109, 41, 248],
  [112, 42, 248],
  [115, 44, 249],
  [118, 45, 249],
  [121, 47, 249],
  [123, 48, 250],
  [126, 49, 250],
  [129, 51, 250],
  [132, 52, 251],
  [135, 53, 251],
  [137, 54, 251],
  [140, 56, 251],
  [143, 57, 251],
  [146, 58, 252],
  [149, 59, 252],
  [152, 60, 252],
  [155, 60, 252],
  [158, 61, 252],
  [162, 62, 252],
  [165, 63, 252],
  [168, 63, 252],
  [171, 64, 252],
  [175, 65, 252],
  [178, 65, 252],
  [181, 66, 252],
  [185, 66, 252],
  [188, 66, 252],
  [191, 67, 252],
  [195, 67, 252],
  [198, 68, 252],
  [201, 68, 251],
  [204, 69, 251],
  [207, 69, 251],
  [211, 70, 251],
  [214, 70, 251],
  [217, 71, 250],
  [219, 72, 250],
  [222, 73, 250],
  [225, 74, 249],
  [227, 75, 249],
  [230, 76, 248],
  [232, 78, 247],
  [234, 79, 246],
  [236, 81, 245],
  [238, 83, 244],
  [240, 85, 243],
  [242, 88, 241],
  [243, 90, 240],
  [244, 93, 238],
  [245, 96, 236],
  [246, 99, 234],
  [247, 102, 232],
  [248, 105, 230],
  [249, 108, 227],
  [249, 111, 225],
  [250, 114, 223],
  [250, 117, 220],
  [251, 120, 217],
  [251, 123, 215],
  [252, 127, 212],
  [252, 130, 210],
  [252, 133, 207],
  [252, 136, 204],
  [252, 139, 201],
  [253, 141, 199],
  [253, 144, 196],
  [253, 147, 193],
  [253, 150, 190],
  [253, 153, 188],
  [253, 156, 185],
  [253, 158, 182],
  [253, 161, 179],
  [253, 164, 177],
  [253, 166, 174],
  [253, 169, 171],
  [253, 171, 168],
  [253, 174, 165],
  [252, 176, 162],
  [252, 179, 160],
  [252, 181, 157],
  [252, 184, 154],
  [252, 186, 151],
  [253, 188, 148],
  [253, 191, 145],
  [253, 193, 142],
  [253, 195, 139],
  [253, 198, 136],
  [253, 200, 133],
  [253, 202, 130],
  [253, 204, 127],
  [253, 207, 124],
  [253, 209, 120],
  [253, 211, 117],
  [253, 213, 114],
  [253, 215, 110],
  [253, 217, 107],
  [253, 219, 104],
  [253, 221, 100],
  [252, 223, 96],
  [252, 225, 93],
  [252, 227, 89],
  [251, 229, 85],
  [250, 231, 81],
  [250, 232, 77],
  [249, 234, 73],
  [248, 235, 69],
  [246, 236, 65],
  [245, 237, 61],
  [243, 238, 57],
  [242, 239, 54],
  [240, 239, 50],
  [238, 239, 46],
  [235, 239, 43],
  [233, 239, 40],
  [231, 239, 37],
  [228, 239, 35],
  [225, 238, 33],
  [223, 238, 31],
  [220, 237, 29],
  [217, 236, 27],
  [214, 235, 26],
  [211, 234, 25],
  [209, 233, 24],
  [206, 232, 24],
  [203, 231, 23],
  [200, 230, 22],
  [197, 229, 22],
  [194, 228, 21],
  [191, 227, 21],
  [188, 226, 21],
  [185, 225, 20],
  [182, 224, 20],
  [179, 223, 20],
  [176, 221, 19],
  [173, 220, 19],
  [170, 219, 19],
  [167, 218, 18],
  [164, 217, 18],
  [161, 216, 17],
  [158, 215, 17],
  [154, 214, 17],
  [151, 213, 16],
  [148, 211, 16],
  [145, 210, 16],
  [142, 209, 15],
  [139, 208, 15],
  [136, 207, 15],
  [132, 206, 14],
  [129, 205, 14],
  [126, 204, 14],
  [122, 202, 13],
  [119, 201, 13],
  [116, 200, 13],
  [112, 199, 13],
  [109, 198, 12],
  [105, 197, 12],
  [102, 196, 12],
  [98, 194, 12],
  [94, 193, 12],
  [91, 192, 12],
  [87, 191, 12],
  [83, 190, 13],
  [79, 188, 14],
  [76, 187, 15],
  [72, 186, 16],
  [68, 185, 18],
  [65, 183, 20],
  [62, 182, 22],
  [59, 181, 25],
  [56, 179, 27],
  [54, 178, 30],
  [52, 176, 34],
  [51, 175, 37],
  [50, 173, 40],
  [50, 172, 44],
  [50, 170, 48],
  [51, 168, 51],
  [52, 167, 55],
  [53, 165, 59],
  [54, 163, 63],
  [56, 161, 67],
  [57, 160, 71],
  [59, 158, 74],
  [60, 156, 78],
  [62, 154, 82],
  [63, 152, 86],
  [64, 150, 90],
  [66, 148, 93],
  [67, 147, 97],
  [67, 145, 101],
  [68, 143, 104],
  [69, 141, 108],
  [69, 139, 111],
  [69, 137, 115],
  [70, 135, 118],
  [70, 133, 122],
  [69, 131, 125],
  [69, 129, 129],
  [69, 128, 132],
  [68, 126, 135],
  [67, 124, 139],
  [67, 122, 142],
  [66, 120, 145],
  [64, 118, 149],
  [63, 116, 152],
  [62, 114, 155],
  [60, 112, 158],
  [59, 110, 162],
  [57, 108, 165],
  [56, 106, 168],
  [54, 104, 171],
  [53, 102, 174],
  [51, 100, 177],
  [50, 98, 180],
  [48, 96, 183],
  [47, 93, 185],
  [46, 91, 188],
  [45, 89, 191],
  [44, 86, 193],
  [43, 84, 196],
  [42, 81, 199],
  [41, 79, 201],
  [40, 76, 204],
  [40, 73, 206],
  [39, 70, 209],
  [38, 68, 211],
  [38, 65, 213],
  [37, 62, 216],
  [37, 59, 218],
  [37, 56, 220],
  [37, 53, 222],
  [37, 50, 224],
  [37, 47, 227],
  [38, 44, 228],
  [40, 41, 230],
  [42, 39, 232],
  [44, 36, 234],
];

const turbo: RgbTuple[] = [
  [48, 18, 59],
  [50, 21, 67],
  [51, 24, 74],
  [52, 27, 81],
  [53, 30, 88],
  [54, 33, 95],
  [55, 36, 102],
  [56, 39, 109],
  [57, 42, 115],
  [58, 45, 121],
  [59, 47, 128],
  [60, 50, 134],
  [61, 53, 139],
  [62, 56, 145],
  [63, 59, 151],
  [63, 62, 156],
  [64, 64, 162],
  [65, 67, 167],
  [65, 70, 172],
  [66, 73, 177],
  [66, 75, 181],
  [67, 78, 186],
  [68, 81, 191],
  [68, 84, 195],
  [68, 86, 199],
  [69, 89, 203],
  [69, 92, 207],
  [69, 94, 211],
  [70, 97, 214],
  [70, 100, 218],
  [70, 102, 221],
  [70, 105, 224],
  [70, 107, 227],
  [71, 110, 230],
  [71, 113, 233],
  [71, 115, 235],
  [71, 118, 238],
  [71, 120, 240],
  [71, 123, 242],
  [70, 125, 244],
  [70, 128, 246],
  [70, 130, 248],
  [70, 133, 250],
  [70, 135, 251],
  [69, 138, 252],
  [69, 140, 253],
  [68, 143, 254],
  [67, 145, 254],
  [66, 148, 255],
  [65, 150, 255],
  [64, 153, 255],
  [62, 155, 254],
  [61, 158, 254],
  [59, 160, 253],
  [58, 163, 252],
  [56, 165, 251],
  [55, 168, 250],
  [53, 171, 248],
  [51, 173, 247],
  [49, 175, 245],
  [47, 178, 244],
  [46, 180, 242],
  [44, 183, 240],
  [42, 185, 238],
  [40, 188, 235],
  [39, 190, 233],
  [37, 192, 231],
  [35, 195, 228],
  [34, 197, 226],
  [32, 199, 223],
  [31, 201, 221],
  [30, 203, 218],
  [28, 205, 216],
  [27, 208, 213],
  [26, 210, 210],
  [26, 212, 208],
  [25, 213, 205],
  [24, 215, 202],
  [24, 217, 200],
  [24, 219, 197],
  [24, 221, 194],
  [24, 222, 192],
  [24, 224, 189],
  [25, 226, 187],
  [25, 227, 185],
  [26, 228, 182],
  [28, 230, 180],
  [29, 231, 178],
  [31, 233, 175],
  [32, 234, 172],
  [34, 235, 170],
  [37, 236, 167],
  [39, 238, 164],
  [42, 239, 161],
  [44, 240, 158],
  [47, 241, 155],
  [50, 242, 152],
  [53, 243, 148],
  [56, 244, 145],
  [60, 245, 142],
  [63, 246, 138],
  [67, 247, 135],
  [70, 248, 132],
  [74, 248, 128],
  [78, 249, 125],
  [82, 250, 122],
  [85, 250, 118],
  [89, 251, 115],
  [93, 252, 111],
  [97, 252, 108],
  [101, 253, 105],
  [105, 253, 102],
  [109, 254, 98],
  [113, 254, 95],
  [117, 254, 92],
  [121, 254, 89],
  [125, 255, 86],
  [128, 255, 83],
  [132, 255, 81],
  [136, 255, 78],
  [139, 255, 75],
  [143, 255, 73],
  [146, 255, 71],
  [150, 254, 68],
  [153, 254, 66],
  [156, 254, 64],
  [159, 253, 63],
  [161, 253, 61],
  [164, 252, 60],
  [167, 252, 58],
  [169, 251, 57],
  [172, 251, 56],
  [175, 250, 55],
  [177, 249, 54],
  [180, 248, 54],
  [183, 247, 53],
  [185, 246, 53],
  [188, 245, 52],
  [190, 244, 52],
  [193, 243, 52],
  [195, 241, 52],
  [198, 240, 52],
  [200, 239, 52],
  [203, 237, 52],
  [205, 236, 52],
  [208, 234, 52],
  [210, 233, 53],
  [212, 231, 53],
  [215, 229, 53],
  [217, 228, 54],
  [219, 226, 54],
  [221, 224, 55],
  [223, 223, 55],
  [225, 221, 55],
  [227, 219, 56],
  [229, 217, 56],
  [231, 215, 57],
  [233, 213, 57],
  [235, 211, 57],
  [236, 209, 58],
  [238, 207, 58],
  [239, 205, 58],
  [241, 203, 58],
  [242, 201, 58],
  [244, 199, 58],
  [245, 197, 58],
  [246, 195, 58],
  [247, 193, 58],
  [248, 190, 57],
  [249, 188, 57],
  [250, 186, 57],
  [251, 184, 56],
  [251, 182, 55],
  [252, 179, 54],
  [252, 177, 54],
  [253, 174, 53],
  [253, 172, 52],
  [254, 169, 51],
  [254, 167, 50],
  [254, 164, 49],
  [254, 161, 48],
  [254, 158, 47],
  [254, 155, 45],
  [254, 153, 44],
  [254, 150, 43],
  [254, 147, 42],
  [254, 144, 41],
  [253, 141, 39],
  [253, 138, 38],
  [252, 135, 37],
  [252, 132, 35],
  [251, 129, 34],
  [251, 126, 33],
  [250, 123, 31],
  [249, 120, 30],
  [249, 117, 29],
  [248, 114, 28],
  [247, 111, 26],
  [246, 108, 25],
  [245, 105, 24],
  [244, 102, 23],
  [243, 99, 21],
  [242, 96, 20],
  [241, 93, 19],
  [240, 91, 18],
  [239, 88, 17],
  [237, 85, 16],
  [236, 83, 15],
  [235, 80, 14],
  [234, 78, 13],
  [232, 75, 12],
  [231, 73, 12],
  [229, 71, 11],
  [228, 69, 10],
  [226, 67, 10],
  [225, 65, 9],
  [223, 63, 8],
  [221, 61, 8],
  [220, 59, 7],
  [218, 57, 7],
  [216, 55, 6],
  [214, 53, 6],
  [212, 51, 5],
  [210, 49, 5],
  [208, 47, 5],
  [206, 45, 4],
  [204, 43, 4],
  [202, 42, 4],
  [200, 40, 3],
  [197, 38, 3],
  [195, 37, 3],
  [193, 35, 2],
  [190, 33, 2],
  [188, 32, 2],
  [185, 30, 2],
  [183, 29, 2],
  [180, 27, 1],
  [178, 26, 1],
  [175, 24, 1],
  [172, 23, 1],
  [169, 22, 1],
  [167, 20, 1],
  [164, 19, 1],
  [161, 18, 1],
  [158, 16, 1],
  [155, 15, 1],
  [152, 14, 1],
  [149, 13, 1],
  [146, 11, 1],
  [142, 10, 1],
  [139, 9, 2],
  [136, 8, 2],
  [133, 7, 2],
  [129, 6, 2],
  [126, 5, 2],
  [122, 4, 3],
];

/** @internal */
export const palettes = {
  CET2s,
  turbo,
};