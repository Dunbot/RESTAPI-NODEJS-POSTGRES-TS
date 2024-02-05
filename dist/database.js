"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
//configuracion para poder conectar a la DB
const pg_1 = require("pg");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const pool = yield new pg_1.Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'clave',
            database: 'node_pg_ts' //,
            //port: 5432
        });
        return pool;
    });
}
exports.connect = connect;
