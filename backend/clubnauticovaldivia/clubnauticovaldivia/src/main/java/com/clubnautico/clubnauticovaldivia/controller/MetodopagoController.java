package com.clubnautico.clubnauticovaldivia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clubnautico.clubnauticovaldivia.service.MetodopagoService;

@RestController 
@RequestMapping ("api/v1/metodos_pago")
public class MetodopagoController {

    @Autowired 
    private MetodopagoService metodopagoService;
}
