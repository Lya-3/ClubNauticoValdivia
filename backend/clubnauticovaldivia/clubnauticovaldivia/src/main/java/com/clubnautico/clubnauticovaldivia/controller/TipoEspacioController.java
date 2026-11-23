package com.clubnautico.clubnauticovaldivia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clubnautico.clubnauticovaldivia.service.TipoEspacioService;

@RestController 
@RequestMapping ("api/v1/tipoespacios")
public class TipoEspacioController {

    @Autowired 
    private TipoEspacioService tipoEspacioService;
}
