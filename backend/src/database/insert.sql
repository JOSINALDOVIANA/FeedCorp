

INSERT INTO `avdenterprise`.`permissoes` (`descri`) VALUES ('criar gestor');
INSERT INTO `avdenterprise`.`permissoes` (`descri`) VALUES ('editar gestor');
INSERT INTO `avdenterprise`.`permissoes` (`descri`) VALUES ('excluir gestor');
INSERT INTO `avdenterprise`.`permissoes` (`descri`) VALUES ('criar colaborador');
INSERT INTO `avdenterprise`.`permissoes` (`descri`) VALUES ('editar colaborador');
INSERT INTO `avdenterprise`.`permissoes` (`descri`) VALUES ('excluir colaborado');
--  ///////////////////////////////////////

INSERT INTO `avdenterprise`.`unidades` (`descri`) VALUES ('utic');
INSERT INTO `avdenterprise`.`unidades` (`descri`) VALUES ('umc');
INSERT INTO `avdenterprise`.`unidades` (`descri`) VALUES ('ugp');
INSERT INTO `avdenterprise`.`unidades` (`descri`) VALUES ('upp'); 

-- ///////////////////////////////

INSERT INTO `avdenterprise`.`amd` (`nome`, `sobrenome`, `email`, `password`, `cat`) VALUES ('josinaldo', 'viana', 'josinaldo@gmail.com', '123456', '1');
-- //////////////////////////////

INSERT INTO `avdenterprise`.`gestor` (`nome`, `sobrenome`, `email`, `password`, `cat`, `id_adm`, `Unidades_idUnidades`) VALUES ('marcus', 'vinicius', 'marcus@gmail.com', '123456', '2', '1', '1');-- //////////////////////


INSERT INTO `avdenterprise`.`col` (`nome`, `sobrenome`, `email`, `password`, `cat`, `id_gestor`, `Unidades_idUnidades`) VALUES ('victor', 'melo', 'victor@gmail.com', '123456', '3', '1', '1');
-- ///////////////////////////////




-- ////////////////////////////////////////////////

INSERT INTO `avdenterprise`.`amd_com_permissoes` (`amd_idadm`, `permissoes_idper`) VALUES ('1', '1');
INSERT INTO `avdenterprise`.`amd_com_permissoes` (`amd_idadm`, `permissoes_idper`) VALUES ('1', '2');
INSERT INTO `avdenterprise`.`amd_com_permissoes` (`amd_idadm`, `permissoes_idper`) VALUES ('1', '3');
INSERT INTO `avdenterprise`.`amd_com_permissoes` (`amd_idadm`, `permissoes_idper`) VALUES ('1', '4');
INSERT INTO `avdenterprise`.`amd_com_permissoes` (`amd_idadm`, `permissoes_idper`) VALUES ('1', '5');
INSERT INTO `avdenterprise`.`amd_com_permissoes` (`amd_idadm`, `permissoes_idper`) VALUES ('1', '6');

-- ////////////////////////////////////

INSERT INTO `avdenterprise`.`gestor_com_permissoes` (`gestor_idgestor`, `permissoes_idper`) VALUES ('1', '4');
INSERT INTO `avdenterprise`.`gestor_com_permissoes` (`gestor_idgestor`, `permissoes_idper`) VALUES ('1', '5');
INSERT INTO `avdenterprise`.`gestor_com_permissoes` (`gestor_idgestor`, `permissoes_idper`) VALUES ('1', '6');

-- ////////////////////////////////////