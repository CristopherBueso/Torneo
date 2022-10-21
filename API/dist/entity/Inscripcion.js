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
exports.Inscripcion = void 0;
const typeorm_1 = require("typeorm");
const Evento_1 = require("./Evento");
const Participante_1 = require("./Participante");
const TipoPelea_1 = require("./TipoPelea");
let Inscripcion = class Inscripcion extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Inscripcion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Inscripcion.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Participante_1.Participante, (participante) => participante.inscripcionPart, { onDelete: "CASCADE" }),
    __metadata("design:type", Participante_1.Participante)
], Inscripcion.prototype, "participante", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => TipoPelea_1.TipoPelea, tipoPelea => tipoPelea.inscripcionTipo, { onDelete: "CASCADE" }),
    __metadata("design:type", TipoPelea_1.TipoPelea)
], Inscripcion.prototype, "tipoPelea", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Evento_1.Evento, (evento) => evento.inscripcion1, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Inscripcion.prototype, "evento1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Evento_1.Evento, (evento) => evento.inscripcion2, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Inscripcion.prototype, "evento2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Evento_1.Evento, (evento) => evento.inscripcionG, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Inscripcion.prototype, "eventoG", void 0);
Inscripcion = __decorate([
    (0, typeorm_1.Entity)()
], Inscripcion);
exports.Inscripcion = Inscripcion;
