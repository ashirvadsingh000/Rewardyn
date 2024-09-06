import React, { Component } from 'react';
import Page1 from '../compages/Page1'
import Page2 from '../compages/Page2'
import Page3 from '../compages/Page3'
import Page4 from '../compages/Page4'
import Page5 from '../compages/Page5'
import Page6 from '../compages/Page6'
import Page7 from '../compages/Page7'
import Page8 from '../compages/Page8'
import Page9 from '../compages/Page9'
import Page10 from '../compages/Page10'
import Page11 from '../compages/Page11'
import Page12 from '../compages/Page12'
import Page13 from '../compages/Page13'
import Page14 from '../compages/Page14'
import Page15 from '../compages/Page15'
import Page16 from '../compages/Page16'
import Page17 from '../compages/Page17'
import Page18 from '../compages/Page18'
import Page19 from '../compages/Page19'
import Page20 from '../compages/Page20'

const IMAGE_ALT = 'Brand Logo';

const Section3Item = ({ index, imageUrl, pagePath}) => {
  const handleImageError = (event) => {
    event.target.src = 'https://picsum.photos/200/300?blur'; // fallback image
  };
  const handleButtonClick = (event) => {
    console.log('Button clicked with pagePath:', pagePath);
  };


  return (
    <div
      key={index}
      className="bg-white rounded shadow-md p-4 cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out shadow-cyan-800 hover:shadow-red-950 border "
    >
      <img
        src={imageUrl}
        alt={IMAGE_ALT}
        className="w-full h-40 "
        onError={handleImageError}
      />
       <a   href={pagePath} target="_blank" >

      <button className="bg-cyan-400 text-white py-2 px-4 rounded mt-4 hover:shadow-lg hover:scale-110 hover:text-red-500 shadow-cyan-800 shadow-md hover:shadow-red-950 transition duration-300 ease-in-out"  >
       Click me 
      </button>
      </a>
    </div>
  );
};


const Section3 = () => {
  const items = Array.from({ length: 20 }, (_, index) => index + 1);
  const imageUrls = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABXCAMAAAC3HXLTAAAAaVBMVEX////1ZAD1XwD1WwD3jl/7zbz3lGj83tL7xbL0VgD/+ff//fz+7+r2eDv5s5j+8u76vKX5rpH82cz1byT96uP2dDP95Nv2cSz3g0/4nnr4l2/5o4H7ybf1ax/5qYn2e0L1ZxH3iFf0TACmjWdDAAAD8ElEQVRYhe2Y2ZKjIBSG4eCGu8Q9Gu1+/4ccFhUlJu1knKqpGv++aRE/DnC2CkKXLl26dOnSvy4/LPMTMJahoupHeJwABkOYi5wBxhtN4OwEsLsRs4gAeyeATVnwl8CJabHt2eeQG8Ck049BT6tzwDbBhOnHEkN0DtinG3BKzgKjGtbgAvBZ4JhQDWbc/c4Cl3UdLg8RnAD289w3hh4iXl6Bzckv1WFwNwNBLLgSHAR+kmhS7jVDVESD1aRMbI+/TPxATsrzsjTADaHrIZ99SS7uW8uq66G4zZGStyOR4kmLkD7lV3EriqEWk4pxJF9bbjAA1Yk4dyICS2qSeW++UxsDhtHJ0qYQMwgH29+Ap+QIBJwtOKSY6s2632RKovxTosBqWZfvAxo106NYer2fFmQyovBc4/A7sgbnzf1+FxkJQ+2l98Yaqm/1tuLGWfM0cbvqYu6KPAbGAfuswvhmrGWLycbO3MnI6QlwrzaSqO3d5jdZ1jqOY0WVHD0AFp6yCs0KbqE2ns+e71/d7XSaR8CNSNjx8pjRcQKHEry8unH144ilCxwF49sSm3nczafqwPosfC7h1LYoSkfAmRwrdjoEV5pMzfAQRekImFF5lCR7jmjp1nA3h0uKxwPgua4T/DCt7qTJ/ZPDjWs/fg22yYJut7nFv8mzYMiQRQ6BRVFZYr3ZWK3OvzXBcXHkjMVwNRuNybgqvCgfZfAl5gdPegFGSYw1Ol69kB73pi2xa+stWGQdPB/IulmQLgNfOx8oDaT+AczVRRSbeSeo5WpPrjyvS6D5GYwCb1Q95KpVSsm7ptKC6eD2wF6s7cl7szlVOa7YL4fl0mTtgWu6emZPE2Qqgf12T3RvbAXe3kULRHcHKDLB6vqcED2Llyg8ltogXBjLrhv+FgyHQzL6xh3H8EUqmdJiru59Dtxy2k+lI0AUL9jEcKryPdqsxm+aid5nPn1fBa5yat/BoQJrEwPB3TY0vgodBFEbL3o4kawlMMz7VstbLC95HZbpRd7OdDmBfDCSjsr3CIueY9EUTEsVDtUAEN6hAH0s30HLwjDvasJbjG7LRUyByZ7oXc/SmUwNNjyWeQNAKP/jtXJwkSlZl5G3VZwJNdqK3KJqLWsmJPY9onKQcsOfsNP17Yyb8u009pgRS4lbluWL9Bj2x8C/rSAyXPtz2en6pHlLcyDXH1HyTVfB6Jqx+LlcqrtEEbkQHW7238sjuJj3zrtsI8b/QA8e5VO1TjiXnnQQMhOJtp6r6/m/T+X/UwWi6I+py+JBJFHL7IQ+lkquPMLJuVxk0zmf8P4lPQ3Lxb6mDNlneyXpT+S7duqxM35Vu3Tp0v+lXy6cLeL5CktfAAAAAElFTkSuQmCC',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAtFBMVEX////lMjgAZNIAXdBplN7kGyP3zs/++fkAWNDjAAudtecAYtIAW9DkICjlLzXlKzL64OEnctZejd3kJi3xLB9hX7QAU87jBxXjEBv98PD2wcPnS1De5/fiAAD76OjxoKLse37rbnHpV1sAT87x9fzU3/X52dryqKrpX2Lwl5nnQkfzs7Xuh4qovep2n+IcbdWyxu2MreVRg9rA0PBFeNf6qaX0gX3zWVKJpeJpgs5bdcrwEQB35XdRAAAEG0lEQVRYhe2YaXOjOBCGERiDR+KwlTWXg8EHxhjH58xmdv///1p8gCTcYE92a6umivdDqpKSHpruRv0qkvQ1feyGd8nfvoiA1SP4Lv0/BivyXR24A3fgDtyBfzuw5oX9zTSP4jiK8qlve9ovgBeT0357ODw+TfPXMRo4qmpQy6LUUN2BO8s33ivgxf7jSOZjXdeJLi73/NgogCYSZRX8me+1gxenIyEKxvc/C8FuApWiBlnubNMG3p/16k81sI/ceqiCTCfoN4GXxzmWZRDs5YbVhr2lZK2B4K2iyDIM9gK1Ft+ldFY93U6kAeDDmAv3ajYqcGIK4VqqmqVRoTiwXCHtRqDVwdtvegVVdB3vhjtZH9+4dsDvpjSY2uEVoHm2n1oGT441EayMyk7ACh5tl5OrTjdwxnEtN2I1uipc883i5iJYLrHj4XYhbpTWXH5pkEgPslMuaMMXwffAAXOYcNyqOqK02GWvZAJgZbd83BWwwqlrCHtRzp5urB/A5FzPQiGfvaYRNXEljT3ezMIaGJ8nwJa4qowVgHm4KWEFdFc18Bzihk61YQDUjSmqyCYSwQQ8klcqC7iNKyWsftTmwXgIJFiS0ip31z5qlsat/P7Bgcd7aLkXlMeBmdmtYCmvckF/8B/IDgw4YcWetXO5pJl/cmDlE1ztV5mz4ifgPivz208GJqcnYRRgrVV9Vr23v9hBScBMcIlDdNAuxkVvf3BnEPx+8dO5AYkDKyMYnP5bMIFrJwWtA/QFcJMT+v3AMwam6sv6m8vxx7OuMNb91/WTG6YwmB2G6gZeAYp90liBV6wNFvGXwE1f3ob/pL8GBk9Nqc/mQlA3wa+BFbh6YVa1hdkHVzwDYxnOBTcXfiHJ/Ghq6OQpMwxOK8uzmQRwwwgJB+i1kKP36gB9r01p+BxivgKpLVnmfAWN674CHCKcE7KyxsbgZjRy/boTkiHHwns32thynHe79GXNu8Fk7iULMpgNLeId6ebRbWIMZSPn/bEFHBl2yq2wMgnwxxg85XhfjVxUu4cmucPNL5PaIli5D2yiHx48sjfj7yCmkcV+6F0mvuclqxTxj0Xu9Y1GFZgcSjIm8vHzNFkUWm7v5DAQNpvUddAsTWeZ4ajitB2sJBE8Pp300mRgTMZzQoof7C4d1+55l4vewzUPWWUFjpVhGS+lExaupdffWDpWbuM9muUIlQ76XKH0IrETmdRuvLyL8XKXtk1W0zCm1WIGVq4VO+g1tFDDMMqMprCpkeVcswyJche+fRqTnqzjJnAR9SYeDFRqmVzopkUN5z0We7A3KtUrj7bJJ54TXKa73niF7FUez5CpOhe5BgrSaPriCJgcemesX/7FosMLNC+0kyTp95PEvt+qX9Visjztt9vt85WdOnXq1On/0D9OSVsbbBtBMgAAAABJRU5ErkJggg==',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABXCAMAAAC3HXLTAAAA7VBMVEX/////agAAAAD/YgD/ZwD/XQD/+vj/WgD/bQD/bwD/VgD/39L//fz/8er/0MH/5tv/6uL/hUn/9/L/1sf29va4uLj/onz/byX/r47/bRv/tpo+Pj5pamv/uZ//xK7/spP/fz//TAD/qIT/iFnjXwTp6en/l2rKysryZgN3d3fY2NiFhYWWlpb/zbn/v6X/ekH/kGD/eC26TgBdGgCpQgA1FQAACBGONgDKUwBsLAAAFx0gKi4tAAB0LABTHgBNVFYjCQAlNjpAFgAuMTLCemMaAADol3WeQwVgKQGmpqYcHBxHHgCDNwSYenHrhF5gOU00AAAGxElEQVRYhe2Za3uiRhTHgZkBwwByiQKagIKia6KAm80mu82m3XTbTbrt9/84nQsiaFCS7Zs+T84buZz5MfOfM2cuCkJrs7ERRImVd0RRzK3ECxy9feEG00wnslwIAIBQZAbpjWutzJ+hYi8WFVAQxc58LnaKa4hg/7VoJ/LVEkrsZC1J768mJ50CDpD3CioOSYsrVFGcfLi+WFyeXUsfb+YFGmXay6i2YUEg7tj89tOUvJvOzj7/cjfhmqDkJVg5zBW4Q+1Q+3I9Yw7T2b30/oaTV62xZqTWJaDQ+c3Vjw8SscfCa3oh/eDklmLoEQB16HyyvvuVID/fv3tcnJ6WnovfPlIyaFVleeCiKlScXN1+laRPD2e9xXS3aqfDCQW3UdmoYEn7bz4SqPRw2Vs87764IlWGo6NamJlajoSTyfqWQIcXs0Mlfqe+/jHwygebuk7WX74RTR+np4eL/EEr0jkMthNl01msrmez6ZGKEMsIGOYHwQ4bD52T+fqOUA8LUJrp05xxsPNCxNRdfyd9ddHQVfs2QEfCTe4XwfChnQKF2T4bIM2Z2Y4LbudPqZ0G3PpUPZA1vtf9cqjNpfv2XEdlqbPb9L7rbhPDye11TeDpAbl1Vq553Jl5JeF0vku9GvjiXWMkJ6ydsGkSsd0693Ln/fC+gRyyflGaQqLGFb+XSbEw7ULafVQYFxiOGrhytuk3Otfs1Xc2lB6HD88VNFkh6DcJsYlfsfP1ak+HxZn0NBPun54pZ1usQiho4K7KJHlyTdNDlfo4bFKBGG8oipreb6eKE+mJkJ+GF4+9Wa93eU/uho+NARHxgGhOxGIFfDa9HD5IhZEvLJozZsDyIITNY7kGJvenix6zw/nC4QICo9llF9zKMBewMYJfC9b50rC5414JlnkGANZBr3Iod9YtwVrMA8K3W4A74vqbNOwd9NwYzzxi44irgjuTv6SH3pHpuLCQc5FzxI+peyVJl+2wgqFy7uCYI63vnfTQdpbDRQAfXlPhSCXgzg/prGV1BTvlARHLzT7dlav654JIo6Etd9NxsGmS0/QghgRLRro4//rQeqnv8JWS0pAq9fMYKQo4Z3HYuWk/3ct8rnl2ztAdj+yCgJJuPtq5+dSWu8ndYKfCsolDy6V7QBAvS/HFyee2XC3mkyOshLCMV/1iFwhAVo1tUbw90nVlyu1udqWW0+3i5eqcIFWV79cgAmF9KJJnfzcybRxEQdm4outICVAYLO+zZRkB3fMBLUM1+wfvhaVm604Y52lQyTQluG4A5JG5DSwjcrDRl9mQhkrqLTcN0Uy8DPtxrqhjqz5BdPe2k1QCJXFq1UpMzxjggbBpDFJVBdGfMfklrVRdby99xXUyBIrY352ccGD2l6EWCfuVoF9Jd6rBTc/R9lQB+bG3LyEZ0OZqGQiRUN+E027xcw83TL52mPsQQt9344FjPj9gk64jrIxAWCaQigAQUkjojPor5/DEoHcxNg+54ATbQZ991KYxuVrihiq81OTAw/8J6M3e7M3+B2ZTO7Deea3J+SgdpS85D9WXAy8Mjp7NyojkXdBvjQ3yMTVV9Y9kNpkdcLQF2zFCcYC7Rp9MV01b1VeA5QzBJb/EELoHT9hfBA6Rutxce+NxfX51wiz3/VFy7tTA+ioZZYNy1YoH1CvPBtXFlO7vrcP1pcD3gHJM13QQ0Mk0NktwZPiIPoN8YyD3Cy/yKN0ukZcILHfAeCxwrdnZArDYSQFI7QIs5pt1lMq+79GlEBhxL7+UMgJgV1asCCJ10EmcqGNMtRf5EQQHg9QxA5deIdIMHVCvgF7QJ+GGYkFQCOAw0zkYnZNHtixrmiDb2gjyPitqTGuCVaYKXc8RL/qjJfQ8s9yYjiAsNBkjspBQDQ7mDrLjZXGapr5YARdHln6JkTHxsrjXFlzWGGdJYkFUgEVfoKfRKu0kxM77SzDgQ5rVjwrvjCpeW3C/qvESVcEBa208CByrKkURx1YBNigQjIhXVpMiQJXNwxZMtips9wYzrldVipiujWT6VZjydzCnXnWw7sNU2weTzavpbgQ1alKIgMSvnRXPZOY1Eort6RYseGj7v1AJhiTcdBZRII4yZQes5JnIr0i4sRNdYEUJqmssaBZAib4DZrv4SC3WsC7TOClHXsL/vYE0hIQB7zQyZugGFVbPQRIFqKNo4GUiYr5YFVj61EKXrGOBm9mR77o+BZNFsA9CzaMvyDaJFT9PmVfcDSDxiitgwclcOnwUmMchHSCg7ADHMBw6ukxitFVdajp/UeZuu/CyqdfOZKFjg7wsluzyz/yB+GYt7V9Cb4ertoeoUAAAAABJRU5ErkJggg==',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABYCAMAAAC3QJuLAAAAaVBMVEX///8AAADl5eU8PDz8/Pz4+PjMzMz09PTx8fHV1dXt7e3Pz8/GxsZnZ2ekpKSpqam3t7d+fn6xsbEqKipRUVE3Nzdvb2+/v7/f399ISEgwMDAeHh6GhoZYWFiOjo5DQ0OcnJwVFRULCwtX1s8qAAAEFElEQVRYhe2X2dKiQAyFm0VBEMHlxwUV8P0fcuz1HBanpmaamylzJ3S+ppOTdBTia1/72te+9j9buLaWr3xyn4G1Y+oRm9SO+/CIFVnruHef3IvDBpVP7hrc0CcXaeu9yuHhuCefWIEweE3bCtyzT+4W3Nwnt3PY1qscUG2FzyqOIQevadv8OO7OJ3fbuKpY/yurzBHJEk1Sp23T1UVR3DcffNPzXb6v71U2ehPLSmhLg0YVR+9fIdRx206hWYWovfO8HtT9WVeYdkuQtkKIQ0Ruk+6WPW/B0PYXet0p7ksfI+O0PYdex2EsttdgYjdaUivuPtbRxJq8HnsVCbxW9ylVebkVD0GHrOhQUyd8TfoBiyJdnSQ3MpGZgZGVLteTszh7miVhJLm1+TUTM7LCcn+3vfnC/Cj2vf2SVT9ccywGG90M9sAP79W5Y2HsbURFnFZGvRd2CPoqXa1ykujLrCLMVcU8KehbtALKgLQz+JBTaBY4a/QqghSZzRI2V5UQ35nLiu1NZkM8itQDurADV7y0e2dOAOwgzbZuYzzS8w9KMjg41/zoHqr++i4wcDOcxoZ/cOEpj22PKKBQwuvQ831KcDdISOMKJwN3N4pVCdeUGovcLWfueeZzWSMyNCH2bqk1ZiPuk7k7IKqZzXopebqva3hyHGoptIK4MYq+QafHuVXtUxh4vqD7Sx31fe2I2LxL0G5p8sUB97JvI+8Bt/G1u79UdmWyhQ1/CpcOCcEBZUsh1d0IyxXVmWiJl7khqfni0rnggHJ/qpI9c3FhqXqTZSKCNh2nDaMOOnIjHXKs4TkgwZDfSJXUimvqBtX2g7Rhs59MDORwIC6J8UeG96G5V/USyqxdSkgjV5lfkjjLgY4qw3uJNDeQLmkzeGfSRnIQQy5/L3VOGUJV65IrFb/p3TtURQhdqXhSM6Mqpug85FGVOiR3IwajDm5VCpzq4KQZzIXc1iunDsmVKaFIzskhUM2LulAzF13VHFTaFFf+oMk3di7YLNIPgXAipwDqZCZHw5UXLXUOmnyhS9Nl6CqO9DxB3dXc2Dp4QgdlgwxRpuGym6QoOJb5Je9etJPunGfDVWVADphrqGyNXEl4b2vahn71Zw6eoBxqw+cibTc7K57p+0ZmK0VHVKiZL4ZWWnDRbU9OI59Gs94KWqctEKoZxKPGrA2bobSTD8OWy0rY06mzmQV8QT+xWTY39T2gedOL9Q8qUEzdJCHuBqtuHOP2QJfHk7l0b81W2/Df0WYwUTYl/2mx0405XGiN1iTu4fQ/7XZfPE6nR1GXo3f2yp94/LHFaZpMn9rg/T133myB+ebuFuLel+HG7TJcN9d65l4W4pYLcfcLcdtluOltGW7eLMPFIOyX290iY3652efO6sl+AR9GLiHwdJfHAAAAAElFTkSuQmCC',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAABHVBMVEX/////8gAAi9f/9QAAj9j///v/+d7/1gD/1jj/6aL/wAD8w08Akdn+mgAAldr/5QDF5PX/yQD/0S7+yE/n9Pv/6wD/7aH0+/7/0gCYze0bnNzV6/iCw+mg0u//4AA1pN/v9/X///T98OL4qgDwuAD8uAD4zp3+7K//pQDdiwDojADPfAD+31n/9rH/7zD/9Uv/7FX/9J/48Gv18Yb/5in06o3373bq6Mxwuea12fEAg9VPq+Hn5tjw65r/3i3t6arq6bvr5gDm4iTq4Vv050Nono4AjMbn2iYAfb0Ai+qrwmQjf6Qmnci+11bJ0hehsFyvwTirs0s9fJE7lrBbsKfN1jh0vXEbn76+uTXf0UK1q1X+88lznINVprr/22XTqbT1AAACYElEQVRYhe2SbVMTMRCAc3tBtIY0xbTHJXcXX1BRERQBcwQK1JdKBbQqvuv//xnuhZbR2g586IwfzDOTSSaXfTa3WUICgUAgEAgEAoHA/8qlP7kxLe/NW7Xa4mLNg9PtO9MS3y2Wlu7dn/M8mFtqLM9Mx/twZfUactWDi+XVR9MRP65HcbyGo+IJjmh9/EEpKojWhJR6uKnFZHERRdHGZuR5iqPZHn/QQkVCeVJuueGmYnL0nM4TP7dmUbay7b07O3EU1yeIDc3LspTUEWn9jTFecjX4miRnufhAvNBE5er27ubG3m6839mfJKY+QIAlqZO5k05lRGOa3AgcyjgtjLSZZdx5c6tRiaPms821550XLynvzo/1SlBCaFJCineXjjLDQQvIiAKZgbIKREbNVmqZsj7gSqMeDei8ogwOeuPFAr+BIhmI6mcNzXBZppA7yCUYQhwklqrTzCPi+DVjh72jYry4pFbjjR3Vkpukqi3msAwYFgNdiaL4J0m1W46I4+MDDp04niAeBCiOhbUSHDmtSE4NSVGMZSCseknM/JvYN/EbYIfYxhPEDqoAybE3IBVUZQZsohgxVaWVA4bZquIaavSZeP/4bb/ff8fY+/7JRLHxHWt5VnKdMsWxKSS+U6ly3DTClZpX1c2VGoqLZvOkxwEY5+zgQ3N2vHiIbyULIvlrc2Tdaqx3T44+flKKc654r36O2GO2knPPtGpFu9vtttufKYcv7aK4iLgszz/Tqs2e8hXfrpoXLiC+CN/mL3va35X64Vc/pyMmMwOuI34xJW8gEAgEAoFAIBD41/wCx/hDyKxyy8YAAAAASUVORK5CYII=',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAqFBMVEVYCkb/nQD/////oABcEkpkJFP/owBPAEhSAEdVAUdKAElwKkGHPTqvYi6PRjiuXi7KdyNUAEFPADtKADRFAEnRw81DACtHADDm3+Tz7/I+ACSehpbihxe6qbU8ACCVeYzHt8KynqxsO15yRGTZz9aaUDTqjhS2ZyuAWHSPboVrM1x4TmuFYnqmj55pIkHDbifXgB1jHEOgVTJ/ODx6Mz71lgpeEEM0ABMYrKMhAAAESklEQVRYhe2ZC3OqPBCGw0aubfUk4ZLglYpWrdfWtv//n30JiqCkrbY458x87owDvISHzeZC3CDIjXf7j41f2Wya8AMO7Y/pM6OEoF8ZIZQ9Do7AYh7+EnqAR0NegHmD1oPN0DTNwZzW5O6eHKU7sGjUylU+8ww8rzEOe/KjAqdh3VyEWFeCJzUHQhmZAeKsfi5CUYq6tUdYGV2g/hUiIWPxjJ6vAkYNZF6FK+2vgF3H9nzfsx33SNar54MdbzlarTud9Wq09JxC3TR36stdoV4AdvxmB1s4M8voNP3MP9d/XRu5iscvX6A/AXuvbxY2Doat8auHkH3XKauGZTS9y8D+0xFAofGD74/wiWpYfz4ja8He2jIqZq0edGrnk2jowN4fDUE5rVU79rlgr6XlfmbWShuNKthdXsSV5HtdNKpgf11UGVvSKhHI1NLbx7pgVMDu9gDCb62N7y1bb0dobDzdef77y/igWk2NyxWwvcofsNauLYeFa6NyJ8HjjacGi22vchWv/TPAvlEt7ncKn9+8fI7wCxfO8NjdHPx4P8wy7rIIT6mlvK9icQp2RnswLo+pokHHpVrbD3sVt6rNdwq2W/vC1qjkhfOSv+6phHBfc1XTlSvg3Iuj3uk0LY1v7l3usWbGuIFv4Bv4Br6Bb+D/K/jwPba2pT8v7jZXy99utDH24KfvP/8I7RD4eKXn5Ou397Lq7VdI1l31H1R17TZSy0tsbY8WN84rztTR0evcjaHI1pNmhVz12L4fY9zZnlTO3nYwHt+fEJzlWtZtpFt5a1b0ju86fqVuru84fmWJ5nqeW1U/Addj/xj4jKTij8Bk1v82MfMjMAtg+p3POjDZ/w4X2ZEUxwx8euNbMGEmpaxBWHZOTEZ2IlInlJmNiChwaGYlKJ01mA5dAdOJANEPAAZMehuoVC1FdCoAAkSyo5hHAbQ5QMIQW0ghnWnIp2BiyoIqkyokmXJIpikM6RT4tA1pOATeb/NuLN8XdAGGbAFiMQDQNOUpmC6g3ZtAGjMhaB+Sj5DCIOZAwo8ETCnEYUhlKJIwHsAiBpgxdVIlV8AJTKTXAxZJWBcE5xy4fF4eBUxV8jZdsKzxaFfyQMSI9FXYLgHLR7ttac8MoC+PfdkBFgMBQS8Hyxsxou1LwWgK6UfYM02WwrwX9oaU0DjuCRHn4FjAJPxIQZNv/ApsytYXAYcgGsoWDQSYCaTdFAaFx3PZigK4JlVc6RVzLjsP71OaBNLBBRc8aRD6OBAindJGoq4pbfNHQuZiQugkkIJujFT6MYlkqYiqsaAqEIWRSuETFoZyHBB5Hap7qhAJdzcibY7/H5s2z7ArpXnR9RLTV0ulXy35D9cIstquuN4GC0zq3xKa7TaxfrtBWOEyvt92036zfs6VU1e+UVinz+pLW2xtTqK6tjbZrLS1KS0Y6ueoy6g0mnVPdnllPJL5LyekxmSRHnD/Ae+2ZW2xpihVAAAAAElFTkSuQmCC',
    'https://i.pinimg.com/originals/b9/a5/b4/b9a5b4dfdb2f5ba00dd51988a0bdf8e4.png',
    'https://upload.wikimedia.org/wikipedia/commons/e/ef/Snapdeal_new_official_logo.png',
    'https://m.imimg.com/gifs/indiamartlogo.jpg',
    'https://pbs.twimg.com/profile_images/1168960008249323534/V7Up1_e3_400x400.jpg',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXnbCNbfY-Sny7BUHBeSehfYxP8sqia3i1YKRn0SPvqmv0KH3H',
    'https://i.pinimg.com/originals/58/3b/f1/583bf1744b9419813a94323c68f23df9.png',
    'http://t0.gstatic.com/images?q=tbn:ANd9GcSakg2ZE9KoehSQbTgUGxtxThOuY0aWv48gK4F6OpfLgML6PZNc',
    'https://builtin.com/cdn-cgi/image/f=auto,fit=contain/sites/www.builtin.com/files/styles/company_logo/public/2024-03/1630619585463.jpeg',
    'https://builtin.com/cdn-cgi/image/f=auto,fit=contain/sites/www.builtin.com/files/styles/company_logo/public/2024-05/Screenshot%202024-05-22%20at%2012.13.14%20PM.png',
    'https://builtin.com/cdn-cgi/image/f=auto,fit=contain/sites/www.builtin.com/files/styles/company_logo/public/2024-05/Screenshot%202024-05-22%20at%2012.05.40%20PM.png',
    'https://builtin.com/cdn-cgi/image/f=auto,fit=contain/sites/www.builtin.com/files/styles/company_logo/public/2022-02/wayfair.jpeg',
    'https://builtin.com/cdn-cgi/image/f=auto,fit=contain/sites/www.builtin.com/files/styles/company_logo/public/2024-05/Screenshot%202024-05-22%20at%2012.25.20%20PM.png',
    'https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=contain,w=200,h=200,q=100/https://builtin.com/sites/www.builtin.com/files/2024-05/Screenshot%202024-05-22%20at%2012.28.36%20PM.png',
    'https://builtin.com/cdn-cgi/image/f=auto,fit=contain/sites/www.builtin.com/files/styles/company_logo/public/2023-12/1631342988209.jpeg'
  ];
  const pages = [
    {Component:Page1, path:'/page1'},
    {Component:Page2, path:'/page2'},
    {Component:Page3, path:'/page3'},
    {Component:Page4, path:'/page4'},
    {Component:Page5, path:'/page5'},
    {Component:Page6, path:'/page6'},
    {Component:Page7, path:'/page7'},
    {Component:Page8, path:'/page8'},
    {Component:Page9, path:'/page9'},
    {Component:Page10, path:'/page10'},
    {Component:Page11, path:'/page11'},
    {Component:Page12, path:'/page12'},
    {Component:Page13, path:'/page13'},
    {Component:Page14, path:'/page14'},
    {Component:Page15, path:'/page15'},
    {Component:Page16, path:'/page16'},
    {Component:Page17, path:'/page17'},
    {Component:Page18, path:'/page18'},
    {Component:Page19, path:'/page19'},
    {Component:Page20, path:'/page20'},
  ];
 
  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((index) => (
<Section3Item key={index} index={index} imageUrl={imageUrls[index - 1]} pagePath={pages[index - 1].path}  />
        ))}
      </div>
    </div>
  );
};