'use strict';

const { existsSync, mkdir, mkdirSync } = require('fs')
const rimraf = require('rimraf')

module.exports = class TempDir {
    constructor() { }
    createDir(destination) {
        this.filePath = destination
        if (!this.filePath) {
            throw new Error('Unknown Path')
        }
        !existsSync(this.filePath) ?
            mkdir(this.filePath, (err) => {
                if (err) throw err
            }) :
            (rimraf.sync(this.filePath),
                mkdir(this.filePath, (err) => {
                    if (err) throw err
                }))
        return
    }
    createDirSync(destination) {
        this.filePath = destination
        if (!this.filePath) {
            throw new Error('Unknown Path')
        }
        !existsSync(this.filePath) ?
            mkdirSync(this.filePath) :
            (rimraf.sync(this.filePath),
                mkdirSync(this.filePath))
        return
    }
}