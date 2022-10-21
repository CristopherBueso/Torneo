"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participante = void 0;
const typeorm_1 = require("typeorm");
const Escuela_1 = require("./Escuela");
const Inscripcion_1 = require("./Inscripcion");
let Participante = class Participante extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Participante.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Participante.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Participante.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Participante.prototype, "edad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Participante.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Escuela_1.Escuela, (escuela) => escuela.participante, { onDelete: "CASCADE" }),
    __metadata("design:type", Escuela_1.Escuela)
], Participante.prototype, "escuela", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Inscripcion_1.Inscripcion, (inscripcionPart) => inscripcionPart.participante, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Participante.prototype, "inscripcionPart", void 0);
Participante = __decorate([
    (0, typeorm_1.Entity)()
], Participante);
exports.Participante = Participante;
