import {generate} from '../src'

describe('generate name',() =>{
    test('returns name',()=>{
        const name = generate();
        expect(typeof name).toEqual('string')
    })

})