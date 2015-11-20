var ColorUtil={
	initColorArray: function () {
		var Pinkish_Purple = new Color(241 , 178 , 230 , 255 ); colorArray[0] = Pinkish_Purple ;
		var Purple = new Color(158 , 84 , 154 , 255 ); colorArray[1] = Purple ;
		var Dark_Purple = new Color(147 , 109 , 183 , 255 ); colorArray[2] = Dark_Purple ;
		var Deep_Purple = new Color(127 , 93 , 174 , 255 ); colorArray[3] = Deep_Purple ;
		var Bluish_Purple = new Color(82 , 104 , 194 , 255 ); colorArray[4] = Bluish_Purple ;
		var Darkest_Blue = new Color(31 , 56 , 85 , 255 ); colorArray[5] = Darkest_Blue ;
		var Dark_Blue = new Color(15 , 76 , 100 , 255 ); colorArray[6] = Dark_Blue ;
		var Blue = new Color(0 , 120 , 191 , 255 ); colorArray[7] = Blue ;
		var Light_Blue = new Color(0 , 124 , 176 , 255 ); colorArray[8] = Light_Blue ;
		var Lightest_Blue = new Color(94 , 154 , 202 , 255 ); colorArray[9] = Lightest_Blue ;
		var Pale_Blue = new Color(121 , 171 , 210 , 255 ); colorArray[10] = Pale_Blue ;
		var Bright_Blue = new Color(106 , 206 , 185 , 255 ); colorArray[11] = Bright_Blue ;
		var Dark_Red = new Color(134 , 26 , 34 , 255 ); colorArray[12] = Dark_Red ;
		var Red = new Color(187 , 30 , 16 , 255 ); colorArray[13] = Red ;
		var Reddish_Pink = new Color(188 , 64 , 119 , 255 ); colorArray[14] = Reddish_Pink ;
		var Dark_Pink = new Color(196 , 97 , 140 , 255 ); colorArray[15] = Dark_Pink ;
		var Pink = new Color(254 , 135 , 163 , 255 ); colorArray[16] = Pink ;
		var Light_Pink = new Color(255 , 176 , 191 , 255 ); colorArray[17] = Light_Pink ;
		var Lightest_Brown = new Color(208 , 176 , 132 , 255 ); colorArray[18] = Lightest_Brown ;
		var Light_Brown = new Color(249 , 193 , 110 , 255 ); colorArray[19] = Light_Brown ;
		var Brown = new Color(190 , 139 , 96 , 255 ); colorArray[20] = Brown ;
		var Dark_Brown = new Color(121 , 77 , 62 , 255 ); colorArray[21] = Dark_Brown ;
		var Orange_Brown = new Color(224 , 122 , 63 , 255 ); colorArray[22] = Orange_Brown ;
		var Bluish_Green = new Color(0 , 117 , 119 , 255 ); colorArray[23] = Bluish_Green ;
		var Dark_Green = new Color(0 , 111 , 61 , 255 ); colorArray[24] = Dark_Green ;
		var Green = new Color(0 , 131 , 81 , 255 ); colorArray[25] = Green ;
		var Lighter_Green = new Color(167 , 197 , 142 , 255 ); colorArray[26] = Lighter_Green ;
		var Dark_Grey = new Color(142 , 146 , 145 , 255 ); colorArray[27] = Dark_Grey ;
		var Light_Grey = new Color(194 , 199 , 202 , 255 ); colorArray[28] = Light_Grey ;
		var Lightest_Grey = new Color(200 , 200 , 199 , 255 ); colorArray[29] = Lightest_Grey ;
		var Dark_Orange = new Color(208 , 93 , 40 , 255 ); colorArray[30] = Dark_Orange ;
		var Orange = new Color(237 , 107 , 33 , 255 ); colorArray[31] = Orange ;
		var Light_Orange = new Color(255 , 170 , 129 , 255 ); colorArray[32] = Light_Orange ;
		var Bright_Orange = new Color(255 , 178 , 0 , 255 ); colorArray[33] = Bright_Orange ;
		var Yellow = new Color(255 , 199 , 0 , 255 ); colorArray[34] = Yellow ;
		var Peach = new Color(249 , 193 , 110 , 255 ); colorArray[35] = Peach ;
		var Beige = new Color(255 , 213 , 145 , 255 ); colorArray[36] = Beige ;
		var Lightest_Yellow = new Color(254 , 229 , 165 , 255 ); colorArray[37] = Lightest_Yellow ;
		var Yellowish_White = new Color(241 , 236 , 225 , 255 ); colorArray[38] = Yellowish_White ;
		var Black = new Color(0 , 0 , 0 , 255 ); colorArray[39] = Black ;
		var White = new Color(255 , 255 , 255 , 255 ); colorArray[40] = White ;
		var Bright_Green = new Color(166, 227 , 95 , 255 ); colorArray[41] = Bright_Green ;
		var Silver = new Color(135,133,129 , 255 ); colorArray[42] = Silver ;
		var Dirty_Green = new Color(153 , 194 , 33 , 255 ); colorArray[43] = Dirty_Green ;
		var Darker_Blue = new Color(0 , 91 , 140 , 255 ); colorArray[44] = Darker_Blue ;
		var Sky_Blue = new Color(172 , 227 , 239 , 255 ); colorArray[45] = Sky_Blue ;
		var Light_Green = new Color(185 , 233 , 114 , 255 ); colorArray[46] = Light_Green ;
		var Darker_Red = new Color(246 , 80 , 88 , 255 ); colorArray[47] = Darker_Red ;
		var Light_Red = new Color(187 , 30 , 16 , 255 ); colorArray[48] = Light_Red ;
		var Pale_Beige = new Color(255 , 194 , 158 , 255 ); colorArray[49] = Pale_Beige ;
		var Brighter_Orange = new Color(255 , 181 , 17 , 255 ); colorArray[50] = Brighter_Orange ;
		var Dark_Orange_Brown = new Color(189 , 100 , 57 , 255 ); colorArray[51] = Dark_Orange_Brown ;
		var Light_Purple = new Color(185 , 137 , 203 , 255 ); colorArray[52] = Light_Purple ;
		var Dirty_Pink = new Color(254 , 178 , 224 , 255 ); colorArray[53] = Dirty_Pink ;
	}
}
function storethiscolor(array){
  for(var i = 0, l = array.length; i < l; i++) {
    for(var j = i + 1; j < l; j++)
      if (array[i] === array[j]) j = ++i;
    thiscolorCode.push(array[i]);
  }
}
