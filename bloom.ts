import {Md5} from "ts-md5"
let fs = require("fs")
let wordList = fs.readFileSync('./wordlist.txt').toString('utf-8')
/* 
 * Bloom Filter
 * Initially we have an empty array of bits and  a dictionary of words
 */
class bloomFilter {
    private dict: boolean[]

    constructor(dict: string[]) {
        this.dict = new Array(dict.length)
    }
    private addWord(word: string): void {
        let hashArray: string[] = Array.from(Md5.hashStr(word).toString())
                
        hashArray.forEach(e => {
            this.dict[e] = true
        })
    }

    public isWord(word: string): boolean {
        return this.dict[word] !== undefined
    }
}

let formattedWordList = wordList.split('\n')
let x = new bloomFilter(formattedWordList)
console.log(x.isWord("zine"))