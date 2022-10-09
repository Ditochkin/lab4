import {MiniMaple} from './miniMaple.js'

document.forms.publish.onsubmit = function() 
{
    const polinoliam = this.polinoliam.value;
    const diff = this.diff.value;

    const maple = new MiniMaple(polinoliam);
    this.result.value = maple.differentiate(diff);

    return false;
};
