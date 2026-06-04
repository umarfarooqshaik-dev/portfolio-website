package com.portfolio.service;

import com.portfolio.Model.Skills;
import com.portfolio.Repository.SkillsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillsService {

    @Autowired
    private SkillsRepository skillsRepository;

    public List<Skills> getAllSkills() {
        return skillsRepository.findAll();
    }

    public Optional<Skills> getSkillsById(Long id) {
        return skillsRepository.findById(id);
    }

    public Skills addSkills(Skills skills) {
        return skillsRepository.save(skills);
    }

    public void deleteSkills(Long id) {
        skillsRepository.deleteById(id);
    }
}
