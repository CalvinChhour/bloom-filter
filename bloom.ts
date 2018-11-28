import {Md5} from "ts-md5"
let fs = require("fs")
let wordList = fs.readFileSync('./wordlist.txt').toString('utf-8')
/* 
 * Bloom Filter
 * Initially we have an empty array of m bits, k hashes and a dictionary of words
 * 
 */
class bloomFilter {
    private dictionary: boolean[]
    private m: number
    private k: number

    constructor(m: number, k: number, dict: string[]) {
        this.dictionary = new Array(m)
        this.m = m
        this.k = k

        for (let i = 0; i < m; i++) {
            this.dictionary[i] = false
        }
    }

    private addWords(words: string[]): void {
        let hashArray: string[] = Array.from(Md5.hashStr(word).toString())
                
        hashArray.forEach(e => {
            this.dictionary[e] = true
        })
    }

    private calculateHash(word: string) {

    }

    public addWord(word: string): void {

    }

    public isWord(word: string): boolean {
        return this.dictionary[word] !== undefined
    }
}

let formattedWordList = wordList.split('\n')
let x = new bloomFilter(10, 10, formattedWordList)
console.log(x.isWord("zine"))