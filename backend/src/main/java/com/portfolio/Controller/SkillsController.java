package com.portfolio.Controller;

import com.portfolio.Model.Skills;
import com.portfolio.service.SkillsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/portfolio/skills")
public class SkillsController {

    @Autowired
    private SkillsService skillsService;

    @GetMapping("/all")
    public List<Skills> getAllSkills() {
        return skillsService.getAllSkills();
    }

    @GetMapping("/{id}")
    public Optional<Skills> getSkillsById(@PathVariable Long id) {
        return skillsService.getSkillsById(id);
    }

    @PostMapping("/add")
    public Skills addSkills(@RequestBody Skills skills) {
        return skillsService.addSkills(skills);
    }

    @DeleteMapping("/{id}")
    public void deleteSkills(@PathVariable Long id) {
        skillsService.deleteSkills(id);
    }
}
