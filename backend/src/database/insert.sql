

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

INSERT INTO `avdenterprise`.`adm` (`nome`, `sobrenome`, `email`, `password`, `cat`) VALUES ('josinaldo', 'viana', 'josinaldo@gmail.com', '123456', '1');
-- //////////////////////////////

INSERT INTO `avdenterprise`.`gestor` (`nome`, `sobrenome`, `email`, `password`, `cat`, `id_adm`, `Unidades_idUnidades`) VALUES ('marcus', 'vinicius', 'marcus@gmail.com', '123456', '2', '1', '1');-- //////////////////////


INSERT INTO `avdenterprise`.`col` (`nome`, `sobrenome`, `email`, `password`, `cat`, `id_gestor`, `Unidades_idUnidades`) VALUES ('victor', 'melo', 'victor@gmail.com', '123456', '3', '1', '1');
-- ///////////////////////////////




-- ////////////////////////////////////////////////

INSERT INTO `avdenterprise`.`adm_com_permissoes` (`adm_idadm`, `permissoes_idper`) VALUES ('1', '1');
INSERT INTO `avdenterprise`.`adm_com_permissoes` (`adm_idadm`, `permissoes_idper`) VALUES ('1', '2');
INSERT INTO `avdenterprise`.`adm_com_permissoes` (`adm_idadm`, `permissoes_idper`) VALUES ('1', '3');
INSERT INTO `avdenterprise`.`adm_com_permissoes` (`adm_idadm`, `permissoes_idper`) VALUES ('1', '4');
INSERT INTO `avdenterprise`.`adm_com_permissoes` (`adm_idadm`, `permissoes_idper`) VALUES ('1', '5');
INSERT INTO `avdenterprise`.`adm_com_permissoes` (`adm_idadm`, `permissoes_idper`) VALUES ('1', '6');

-- ////////////////////////////////////

INSERT INTO `avdenterprise`.`gestor_com_permissoes` (`gestor_idgestor`, `permissoes_idper`) VALUES ('1', '4');
INSERT INTO `avdenterprise`.`gestor_com_permissoes` (`gestor_idgestor`, `permissoes_idper`) VALUES ('1', '5');
INSERT INTO `avdenterprise`.`gestor_com_permissoes` (`gestor_idgestor`, `permissoes_idper`) VALUES ('1', '6');

-- ////////////////////////////////////

INSERT INTO `avdenterprise`.`tb_apr` (`titulo`, `id_gestor_apr`, `status`) VALUES ('av-trimestral', '1', '1');

-- //////////////////////////

INSERT INTO `avdenterprise`.`tb_apr_metas` (`indicador`, `meta`, `id_tb_apr`) VALUES ('TMA(tempo medio de atendimento) min', '2', '1');
INSERT INTO `avdenterprise`.`tb_apr_metas` (`indicador`, `meta`, `id_tb_apr`) VALUES (' venda de produto por mes', '300', '1');
INSERT INTO `avdenterprise`.`tb_apr_metas` (`indicador`, `meta`, `id_tb_apr`) VALUES ('assiduidade (0-5)', '5', '1');

-- //////////////////////

--INSERT INTO `avdenterprise`.`tb_apr_result` (`id_tb_metas`, `resp`, `col_idcol`) VALUES ('1', '1.5', '1');
--INSERT INTO `avdenterprise`.`tb_apr_result` (`id_tb_metas`, `resp`, `col_idcol`) VALUES ('2', '250', '1');
--INSERT INTO `avdenterprise`.`tb_apr_result` (`id_tb_metas`, `resp`, `col_idcol`) VALUES ('3', '4', '1');

-- /////////////////////////////////

INSERT INTO `avdenterprise`.`apr_com_col` (`id_tb_apr`, `col_idcol`) VALUES ('1', '1');

-- //////////////////////////

